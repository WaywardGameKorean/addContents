import { LootGroupType, OnEquipType, CreatureType, Defense, Resistances, Vulnerabilities, MoveType, DamageType, SkillType, DoodadType, ItemType, ItemTypeGroup, RecipeLevel, EquipType, TerrainType, GrowingStage, DoodadTypeGroup } from "Enums";
import { ActionType } from "action/IAction";
import { AiType } from "entity/IEntity";
import { RecipeComponent } from "item/Items";
import { SpawnableTiles, SpawnGroup } from "creature/ICreature";
import Mod from "mod/Mod";
import Register, { Registry } from "mod/ModRegistry";

//interface IAddContentsData {
//	seed: number;
//}

export default class AddContents extends Mod {
	//@Mod.instance<AddContents>("AddContents")
	//public static readonly INSTANCE: AddContents;

	////////////////////////////////////
	// Items
	//
	@Register.item("RabbitRobe", { //토끼로브
		equip : EquipType.Back,
		defense: new Defense(4,new Resistances(DamageType.Blunt, 2, DamageType.Slashing, 2),new Vulnerabilities(DamageType.Piercing, 1)),
		showOverHair : true,
		hideHelmet : true,
		durability: 120,
		weight: 1.2,
		worth : 200
	})
	public itemRabbitRobe: ItemType;

	@Register.item("CloakCoveredWithMucus", { //점액범벅 망토
		equip : EquipType.Back,
		defense: new Defense(4,new Resistances(DamageType.Fire, 2, DamageType.Slashing, 2),new Vulnerabilities(DamageType.Piercing, 1)),
		durability: 120,
		weight: 1.2,
		worth : 200
	})
	public itemCloakCoveredWithMucus: ItemType;

	@Register.item("HardShell", { //단단한 껍질
		disassemble: false,
		durability: 10,
		weight: 0.5,
		worth : 5,
		groups : [ItemTypeGroup.Other]
	})
	public itemHardShell: ItemType;

	@Register.item("HardShellPowder", { //단단한 껍질 가루
		recipe: {
			components: [
				RecipeComponent(Registry<AddContents, ItemType>().get("itemHardShell"), 1, 1),
				RecipeComponent(ItemTypeGroup.MortarAndPestle, 1, 0)
			],
			requiresFire : false,
			skill: SkillType.Chemistry,
			level: RecipeLevel.Simple,
			reputation: 5
		},
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.Powder,ItemTypeGroup.Compost]
	})
	public itemHardShellPowder: ItemType;

	@Register.item("CrabMeat", { //게살
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [1, 1, 1, -4],
		},
		skillUse : SkillType.Anatomy,
		decayMax : 1500,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.RawMeat]
	})
	public itemCrabMeat: ItemType;

	@Register.item("CookedCrabMeat", { //구운 게살
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [1, 2, 2, -1],
		},
		recipe: {
			components: [
				RecipeComponent(Registry<AddContents, ItemType>().get("itemCrabMeat"), 1, 1),
				RecipeComponent(ItemTypeGroup.Tongs, 1, 0)
			],
			requiresFire : true,
			skill: SkillType.Cooking,
			level: RecipeLevel.Simple,
			reputation: 15
		},
		decayMax : 8000,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.CookedMeat]
	})
	public itemCookedCrabMeat: ItemType;

	@Register.item("AberrantCrabMeat", { //돌연변이 게살
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [1, 1, 1, -4],
		},
		skillUse : SkillType.Anatomy,
		decayMax : 1500,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.RawMeat]
	})
	public itemAberrantCrabMeat: ItemType;

	@Register.item("CookedAberrantCrabMeat", { //구운 돌연변이 게살
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [1, 3, 3, -1],
		},
		recipe: {
			components: [
				RecipeComponent(Registry<AddContents, ItemType>().get("itemAberrantCrabMeat"), 1, 1),
				RecipeComponent(ItemTypeGroup.Tongs, 1, 0)
			],
			requiresFire : true,
			skill: SkillType.Cooking,
			level: RecipeLevel.Simple,
			reputation: 15
		},
		decayMax : 8000,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.CookedMeat]
	})
	public itemCookedAberrantCrabMeat: ItemType;

	@Register.item("Mud", { //뻘
		use : [ActionType.SetDown],
		onUse : {
			[ActionType.SetDown] : Registry<AddContents, TerrainType>().get("terrainMudFlat")
		},
		disassemble: false,
		durability: 10,
		weight: 0.5,
		worth : 5,
	})
	public itemMud: ItemType;

	@Register.item("PearlOyster", { //진주조개
		disassemble: true,
		dismantle: {
			items: [
				[Registry<AddContents, ItemType>().get("itemHardShell"), 1],
				[Registry<AddContents, ItemType>().get("itemPearl"), 1]
			],
			required: ItemTypeGroup.Sharpened,
			skill: SkillType.Anatomy
		},
		durability: 10,
		weight: 1,
		worth : 500,
	})
	public itemPearlOyster: ItemType;

	@Register.item("Pearl", { //진주
		disassemble: false,
		durability: 10,
		weight: 0.8,
		worth : 1000,
	})
	public itemPearl: ItemType;

	@Register.item("SnailMucus", { //달팽이 점액
		decayMax : 2000,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5
	})
	public itemSnailMucus: ItemType;

	@Register.item("SnailSalveBand", { //달팽이 연고 밴드
		use: [ActionType.Heal, ActionType.HealOther],
		onUse: {
			[ActionType.Heal]: [30, 0, 0, 0],
			[ActionType.HealOther]: 30
		},
		recipe: {
			components: [
				RecipeComponent(Registry<AddContents, ItemType>().get("itemSnailMucus"), 1, 1),
				RecipeComponent(ItemType.Bandage, 1, 0),
				RecipeComponent(ItemTypeGroup.Medicinal, 2, 0),
				RecipeComponent(ItemTypeGroup.MortarAndPestle, 1, 0)
			],
			requiresFire : true,
			skill: SkillType.Tinkering,
			level: RecipeLevel.Intermediate,
			reputation: 25
		},
		disassemble: false,
		durability: 15,
		weight: 0.5,
		worth : 50
	})
	public itemSnailSalveBand: ItemType;

	@Register.item("SnailMeat", { //달팽이 고기
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [-2, 0, 2, -2],
		},
		decayMax : 8000,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.RawMeat]
	})
	public itemSnailMeat: ItemType;

	@Register.item("CookedSnailMeat", { //조리된 달팽이 고기
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [-1, 1, 1, -1],
		},
		recipe: {
			components: [
				RecipeComponent(Registry<AddContents, ItemType>().get("itemSnailMeat"), 1, 1),
				RecipeComponent(ItemTypeGroup.Tongs, 1, 0)
			],
			requiresFire : true,
			skill: SkillType.Cooking,
			level: RecipeLevel.Simple,
			reputation: 15
		},
		decayMax : 12000,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.CookedMeat]
	})
	public itemCookedSnailMeat: ItemType;

	@Register.item("Scallop", { //가리비
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [0, 1, 4, -4],
		},
		decayMax : 2000,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.RawMeat]
	})
	public itemScallop: ItemType;

	@Register.item("CookedScallop", { //가리비구이
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [1, 10, 8, -1],
		},
		recipe: {
			components: [
				RecipeComponent(Registry<AddContents, ItemType>().get("itemScallop"), 1, 1),
				RecipeComponent(ItemTypeGroup.Tongs, 1, 0)
			],
			requiresFire : true,
			skill: SkillType.Cooking,
			level: RecipeLevel.Simple,
			reputation: 15
		},
		decayMax : 8000,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.CookedMeat]
	})
	public itemCookedScallop: ItemType;

	@Register.item("MycenaChlorophos", { //받침애주름버섯
		use: [ActionType.Eat, ActionType.Plant],
		onUse : {
			[ActionType.Eat]: [-2, 2, 2, -2],
			[ActionType.Plant]: Registry<AddContents, DoodadType>().get("doodadMycenaChlorophos")
		},
		skillUse : SkillType.Mycology,
		decayMax : 50000,
		decaysInto: ItemType.RottingVegetation,
		disassemble: false,
		durability: 15,
		weight: 0.3,
		worth : 5,
		groups : [ItemTypeGroup.Food]
	})
	public itemMycenaChlorophos: ItemType;

	@Register.item("MycenaChlorophosLamp", { //받침애주름버섯 램프
		attack : 1,
		damageType : DamageType.Blunt,
		decayMax : 100000,
		decaysInto : ItemType.GlassBottle,
		//use: [ActionType.Build],
		equip : EquipType.Held,
		recipe: {
			components: [
				RecipeComponent(Registry<AddContents, ItemType>().get("itemMycenaChlorophos"), 2, 2, 2),
				RecipeComponent(ItemType.GlassBottle, 1, 1, 1),
				RecipeComponent(ItemTypeGroup.Pulp, 1, 1, 1)
			],
			skill: SkillType.Tinkering,
			level: RecipeLevel.Intermediate,
			reputation: 10
		},
		onEquipEffect : [OnEquipType.LightSource, 1],
		durability: 50,
		weight: 0.8,
		worth : 50
	})
	public itemMycenaChlorophosLamp: ItemType;

	@Register.item("Pillow", { //베게
		recipe : {
			components: [
				RecipeComponent(ItemType.Cotton, 4, 4, 4),
				RecipeComponent(ItemType.Feather, 4, 4, 4),
				RecipeComponent(ItemType.CottonFabric, 2, 2, 2),
				RecipeComponent(ItemType.String, 2, 2, 2),
				RecipeComponent(ItemTypeGroup.Needle, 1, 0, 0),
			],
			skill: SkillType.Tailoring,
			level: RecipeLevel.Advanced,
			reputation: 5
		},
		durability: 25,
		weight: 1,
		worth : 100
	})
	public itemPillow: ItemType;

	@Register.item("WoodenBed", { //나무 침대
		use: [ActionType.Rest, ActionType.Sleep ,/* ActionType.PlaceDown */],
		recipe : {
			components: [
				RecipeComponent(Registry<AddContents, ItemType>().get("itemPillow"), 1, 1, 1),
				RecipeComponent(ItemType.CottonBedroll, 1, 1, 1),
				RecipeComponent(ItemType.Log, 3, 3, 3),
				RecipeComponent(ItemType.WoodenDowels, 4, 4, 4),
				RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0),
			],
			skill: SkillType.Woodworking,
			level: RecipeLevel.Expert,
			reputation: 100
		},
		disassemble: true,
		hasSleepImage: true,
		flammable: true,
		durability: 500,
		groups : [ItemTypeGroup.Bedding],
		weight: 10,
		worth : 400,
		//doodad : {
		//	isFlammable: true,
		//	repairItem: Registry<AddContents, ItemType>().get("itemWoodenBed"),
		//	reduceDurabilityOnGather: true
		//}
	})
	public itemWoodenBed: ItemType;

	@Register.item("Pomegranate", { //석류
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [1, 5, 8, 4]
		},
		returnOnUse: [Registry<AddContents, ItemType>().get("itemPomegranateSeeds"), true],
		dismantle: {
			items: [[Registry<AddContents, ItemType>().get("itemPomegranateSeeds"), 1]],
			skill: SkillType.Botany,
			required: ItemTypeGroup.Sharpened
		},
		decayMax : 10000,
		disassemble: true,
		durability: 15,
		weight: 0.5,
		worth : 5,
		groups : [ItemTypeGroup.Food]
	})
	public itemPomegranate: ItemType;

	@Register.item("PomegranateSeeds", { //석류 씨앗
		use: [ActionType.Plant, ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [0, 1, 1, -1],
			[ActionType.Plant]: Registry<AddContents, DoodadType>().get("doodadPomegranateTree")
		},
		skillUse : SkillType.Botany,
		disassemble: false,
		weight: 0.1,
		worth : 15,
		groups : [ItemTypeGroup.Seed]
	})
	public itemPomegranateSeeds: ItemType;

	////////////////////////////////////
	// Doodads
	//

	@Register.doodad("MycenaChlorophos", { //받침에주름버섯
		spreadMax: 3,
		gather: {
			[GrowingStage.Flowering]:[
				{type: Registry<AddContents, ItemType>().get("itemMycenaChlorophos")},
			],
			[GrowingStage.Ripening]:[
				{type: Registry<AddContents, ItemType>().get("itemMycenaChlorophos")},
			]
		},
		skillUse: SkillType.Mycology,
		allowedTiles: [TerrainType.Dirt, TerrainType.FertileSoil, TerrainType.Grass, TerrainType.WoodenFlooring],
		canTrampleWhenMature: true,
		canGrowInCaves: true,
		isFlammable: true,
		graphicVariation: true,
		particles: {r: 202,g: 16,b: 16},
		canGrow: true,
		decayMax: 750,
		isFungi: true,
		group : DoodadTypeGroup.GatheredPlant
		//providesLight : 1
	})
	public doodadMycenaChlorophos: DoodadType;

	@Register.doodad("PomegranateTree", { //석류 나무
		blockLos: true,
		blockMove: true,
		isFlammable: true,
		graphicVariation: true,
		reduceDurabilityOnGather: true,
		skillUse: SkillType.Botany,
		gatherSkillUse: SkillType.Lumberjacking,
		isTall: true,
		gather: {
			[GrowingStage.Seedling]: [
				{type: ItemType.Branch},
				{type: ItemType.PlantRoots}
			],
			[GrowingStage.Vegetative]: [
				{type: ItemType.Leaves},
				{type: ItemType.Branch},
				{type: ItemType.PlantRoots}
			],
			[GrowingStage.Budding]: [
				{type: ItemType.Leaves},
				{type: ItemType.Twigs},
				{type: ItemType.Branch},
				{type: ItemType.TreeBark}
			],
			[GrowingStage.Flowering]: [
				{type: ItemType.Leaves},
				{type: ItemType.Twigs},
				{type: ItemType.Branch},
				{type: ItemType.TreeBark}
			],
			[GrowingStage.Ripening]: [
				{type: Registry<AddContents, ItemType>().get("itemPomegranate")},
				{type: Registry<AddContents, ItemType>().get("itemPomegranate")},
				{type: Registry<AddContents, ItemType>().get("itemPomegranate")},
				{type: ItemType.Leaves},
				{type: ItemType.Twigs},
				{type: ItemType.Branch,chance: 5},
				{type: ItemType.Branch},
				{type: ItemType.TreeBark}
			],
			[GrowingStage.Dead]: [
				{type: ItemType.Log},
				{type: ItemType.Branch},
				{type: ItemType.Log,chance: 50},
				{type: ItemType.Log,chance: 10},
				{type: ItemType.Log}
			]
		},
		harvest: {
			[GrowingStage.Ripening]: [
				{type: Registry<AddContents, ItemType>().get("itemPomegranate")},
				{type: Registry<AddContents, ItemType>().get("itemPomegranate")},
				{type: Registry<AddContents, ItemType>().get("itemPomegranate")}
			]
		},
		canGrow: true,
		spawnOnTerrain: [TerrainType.Dirt, TerrainType.Grass],
		allowedTiles: [TerrainType.Dirt, TerrainType.Grass, TerrainType.FertileSoil],
		decayMax: 4000,
		spreadMax: 3,
		isTree: true,
		gatherCanHurtHands: true
	})
	public doodadPomegranateTree: DoodadType;

	////////////////////////////////////
	// Creatures
	//
	@Register.creature("SeaCrab", { // 바닷게
		minhp: 2,
		maxhp: 3,
		minatk: 1,
		maxatk: 2,
		defense: new Defense(1,new Resistances(DamageType.Blunt, 1),new Vulnerabilities(DamageType.Slashing, 1)),
		damageType: DamageType.Slashing,
		ai: AiType.Scared,
		moveType: MoveType.WetLand|MoveType.ShallowWater|MoveType.Land,
		blood: {r: 150,g: 255,b: 70},
		spawnTiles: SpawnableTiles.Wet,
		reputation: -200,
		jumpOver: true,
		tamingDifficulty: 25,
		noStumble: true,
		spawnReputation: 2e3,
		spawnGroup: [SpawnGroup.FreshWater],
		//skipMovementChance: 2
	},{
		resource:[
			{item: Registry<AddContents, ItemType>().get("itemHardShell")},
			{item: Registry<AddContents, ItemType>().get("itemCrabMeat")}
		],
		aberrantResource: [
			{item: Registry<AddContents, ItemType>().get("itemHardShell")},
			{item: Registry<AddContents, ItemType>().get("itemAberrantCrabMeat")}
		],
		decay:2200,
		skill:SkillType.Anatomy
	})
	public creatureSeaCrab: CreatureType;

	@Register.creature("Snail", { // 달팽이
		minhp: 1,
		maxhp: 2,
		minatk: 1,
		maxatk: 1,
		defense: new Defense(0,new Resistances(DamageType.Blunt, 1),new Vulnerabilities(DamageType.Slashing, 1)),
		damageType: DamageType.True,
		ai: AiType.Neutral,
		moveType: MoveType.WetLand|MoveType.ShallowWater|MoveType.Land,
		spawnTiles: SpawnableTiles.Wet,
		blood: {r: 150,g: 255,b: 70},
		reputation: -200,
		jumpOver: true,
		tamingDifficulty: 25,
		noStumble: true,
		acceptedItems : [ItemTypeGroup.WaterskinOfPotableWater, ItemTypeGroup.ClayJugOfPotableWater, ItemTypeGroup.CoconutContainerOfPotableWater, ItemTypeGroup.ContainerOfDesalinatedWater, ItemTypeGroup.ContainerOfMedicinalWater, ItemTypeGroup.ContainerOfPurifiedFreshWater, ItemTypeGroup.ContainerOfUnpurifiedFreshWater, ItemTypeGroup.GlassBottleOfPotableWater],
		spawnReputation: 1e3,
		spawnGroup: [SpawnGroup.Any],
	},{
		resource:[
			{item: Registry<AddContents, ItemType>().get("itemSnailMucus")},
			{item: Registry<AddContents, ItemType>().get("itemSnailMeat")},
			{item: Registry<AddContents, ItemType>().get("itemHardShell")}
		],
		aberrantResource: [
			{item: Registry<AddContents, ItemType>().get("itemSnailMucus")},
			{item: Registry<AddContents, ItemType>().get("itemSnailMeat")},
			{item: Registry<AddContents, ItemType>().get("itemHardShell")},
			{item: Registry<AddContents, ItemType>().get("itemCloakCoveredWithMucus"), chance: 1}
		],
		decay:2200,
		skill:SkillType.Anatomy
	})
	public creatureSnail: CreatureType;

	@Register.creature("Nessie", { // 네시
		minhp: 75,
		maxhp: 80,
		minatk: 26,
		maxatk: 28,
		defense: new Defense(5,new Resistances(DamageType.Slashing, 5),new Vulnerabilities(DamageType.Fire, 2)),
		damageType: DamageType.Blunt,
		ai: AiType.Hostile,
		moveType: MoveType.Land|MoveType.ShallowWater|MoveType.Water|MoveType.BreakDoodads,
		lootGroup: LootGroupType.SeaTreasure,
		loot: [{
			item: ItemType.OrnateWoodenChest,
			chance: 3
		}],
		blood: {r: 80,g: 150,b: 175},
		aberrantBlood: {r: 220,g: 30,b: 90},
		spawnTiles: SpawnableTiles.Water,
		spawnReputation : -42e3,
		makeNoise : true,
		reputation: 350,
		tamingDifficulty: 1e3,
		spawnGroup: [SpawnGroup.CaveWater, SpawnGroup.Seawater, SpawnGroup.StrongGuardians],
		noStumble: true,
		acceptedItems: [ItemTypeGroup.Treasure],
		skipMovementChance: 3,
		waterAnimations : true
	},{
		resource:[
			
		],
		aberrantResource: [
			//{item: Registry<AddContents, ItemType>().get("itemSnailMucus")},
		],
		decay:12200,
		skill:SkillType.Anatomy
	})
	public creatureNessie: CreatureType;

	////////////////////////////////////
	// Terrain
	//
	@Register.terrain("MudFlat", {
		tillable : true,
		passable: true,
		particles: { r: 171, g: 176, b: 179 },
		resources: [
			{ type: Registry<AddContents, ItemType>().get("itemPearlOyster"), chance: 2},
			{ type: Registry<AddContents, ItemType>().get("itemScallop"), chance: 5},
			{ type: Registry<AddContents, ItemType>().get("itemMud"), chance: 30, tileChange : TerrainType.Dirt},
		]
	})
	public terrainMudFlat: TerrainType;

	//@Mod.saveData<AddContents>("AddContents")
	//public data: IAddContentsData;
	//public firstLoad = true;

	/**
	 * Executed when a save is loaded.
	 */
	//public onLoad(): void {}

	/**
	 * Executed when a save is unloaded.
	 */
	//public onUnload(): void {}
}
