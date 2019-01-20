import { OnEquipType, CreatureType, Defense, Resistances, Vulnerabilities, MoveType, DamageType, SkillType, DoodadType, ItemType, ItemTypeGroup, RecipeLevel, EquipType, TerrainType, GrowingStage, DoodadTypeGroup } from "Enums";
import { ActionType } from "action/IAction";
import { AiType } from "entity/IEntity";
import { itemGroupDescriptions, RecipeComponent } from "item/Items";
import { SpawnableTiles, SpawnGroup } from "creature/ICreature";
import Mod from "mod/Mod";
import Register, { Registry } from "mod/ModRegistry";

interface IAddContentsData {
	seed: number;
}

export default class AddContents extends Mod {
	@Mod.instance<AddContents>("AddContents")
	public static readonly INSTANCE: AddContents;

	////////////////////////////////////
	// Items
	//
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
		decayMax : 1500,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.Meat]
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
		decayMax : 1500,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.Meat]
	})
	public itemCookedAberrantCrabMeat: ItemType;

	@Register.item("MycenaChlorophos", { //받침애주름버섯
		use: [ActionType.Eat, ActionType.Plant],
		onUse : {
			[ActionType.Eat]: [-2, 2, 2, -2],
			[ActionType.Plant]: Registry<AddContents, DoodadType>().get("doodadMycenaChlorophos")
		},
		skillUse : SkillType.Mycology,
		decayMax : 50000,
		disassemble: false,
		durability: 15,
		weight: 0.3,
		worth : 5,
		groups : [ItemTypeGroup.Food]
	})
	public itemMycenaChlorophos: ItemType;

	@Register.item("MycenaChlorophosLamp", { //형광버섯램프
		attack : 1,
		damageType : DamageType.Blunt,
		decayMax : 100000,
		use: [ActionType.Build],
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
		use: [ActionType.Rest, ActionType.Sleep, ActionType.PlaceDown],
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
		worth : 400,
		doodad : {
			isFlammable: true,
			repairItem: Registry<AddContents, ItemType>().get("itemWoodenBed"),
			reduceDurabilityOnGather: true
		}
	})
	public itemWoodenBed: ItemType;

	@Register.item("Pomegranate", { //석류
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [1, 5, 8, 4]
		},
		dismantle: {
			items: [[ItemType.AppleSeeds, 1]],
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
		use: [ActionType.Eat, ActionType.Plant],
		onUse : {
			[ActionType.Eat]: [0, 1, 1, -1],
			//[ActionType.Plant]: Registry<AddContents, DoodadType>().get("doodadMycenaChlorophos")
		},
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
		skillUse:SkillType.Mycology,
		allowedTiles:[TerrainType.Dirt, TerrainType.FertileSoil, TerrainType.Grass, TerrainType.WoodenFlooring],
		canTrampleWhenMature:true,
		canGrowInCaves:true,
		isFlammable:true,
		graphicVariation:true,
		particles: {r: 202, g: 16, b: 16},
		canGrow:true,
		decayMax:20000,
		isFungi:true,
		group : DoodadTypeGroup.GatheredPlant,
		providesLight : 1
	})
	public doodadMycenaChlorophos: DoodadType;

	////////////////////////////////////
	// Creatures
	//
	@Register.creature("SeaCrab", { // 바닷게
		minhp: 2,
		maxhp: 3,
		minatk: 1,
		maxatk: 2,
		defense: new Defense(1,new Resistances(DamageType.Blunt),new Vulnerabilities(DamageType.Slashing)),
		damageType: DamageType.Slashing,
		ai: AiType.Scared,
		moveType: MoveType.WetLand|MoveType.ShallowWater|MoveType.Land,
		spawnTiles: SpawnableTiles.Wet,
		reputation: -200,
		jumpOver: true,
		tamingDifficulty: 25,
		noStumble: true,
		spawnReputation: 8e3,
		spawnGroup: [SpawnGroup.FreshWater],
		skipMovementChance: 2
	},{
		resource:[
			{item: Registry<AddContents, ItemType>().get("itemCrabMeat")}
		],
		aberrantResource: [
			{item: Registry<AddContents, ItemType>().get("itemAberrantCrabMeat")}
		],
		decay:2200,
		skill:SkillType.Anatomy
	})
	public creatureSeaCrab: CreatureType;

	@Mod.saveData<AddContents>("AddContents")
	public data: IAddContentsData;
	public firstLoad = true;

	/**
	 * Executed when a save is loaded.
	 */
	public onLoad(): void {
	}

	/**
	 * Executed when a save is unloaded.
	 */
	public onUnload(): void {
	}
}
