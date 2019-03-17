import { Action } from "action/Action";
import { LootGroupType, OnEquipType, CreatureType, Defense, Resistances, Vulnerabilities, MoveType, DamageType, SkillType, DoodadType, ItemType, ItemTypeGroup, RecipeLevel, EquipType, TerrainType, GrowingStage, DoodadTypeGroup } from "Enums";
import { ActionArgument, ActionType } from "action/IAction";
import { AiType, EntityType } from "entity/IEntity";
import { RecipeComponent } from "item/Items";
import { SpawnableTiles, SpawnGroup, TileGroup } from "creature/ICreature";
import Mod from "mod/Mod";
import Register, { Registry } from "mod/ModRegistry";
import { HookMethod } from "mod/IHookHost";
import { IContainer, IItem } from "item/IItem";
import { ITile } from "tile/ITerrain";
import { IDoodad } from "doodad/IDoodad";
import IPlayer from "player/IPlayer";
import Random from "utilities/Random";
import IWorld from "renderer/IWorld"

interface IAddcontentsData {
	seed: number;
}

export default class Addcontents extends Mod {

	@Mod.instance<Addcontents>("Addcontents")
	public static readonly INSTANCE: Addcontents;

	////////////////////////////////////
	// Action Registrations
	//
	@Register.action("LightUp", new Action(ActionArgument.ItemInventory)
		.setUsableBy(EntityType.Player)
		.setHandler((action, item) => {
			let player = action.executor;
			console.log(player, item);
			console.log(itemManager.getItemInInventoryByGroup(player, ItemTypeGroup.Fuel, ItemType.Log));
		}))
	public readonly actionLightUp: ActionType;

	@Register.action("AddOil", new Action(ActionArgument.ItemInventory)
	.setUsableBy(EntityType.Player)
	.setHandler((action, item) => {
		console.log(action.executor, item);
	}))
	public readonly actionAddOil: ActionType;

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
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemHardShell"), 1, 1),
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

	@Register.item("SmoothSkin", { // 매끄러운 가죽
		skillUse : SkillType.Anatomy,
		disassemble: false,
		durability: 10,
		weight: 0.2,
		worth : 200
	})
	public itemSmoothSkin: ItemType;

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
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemCrabMeat"), 1, 1),
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
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemAberrantCrabMeat"), 1, 1),
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
			[ActionType.SetDown] : Registry<Addcontents, TerrainType>().get("terrainMudFlat")
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
				[Registry<Addcontents, ItemType>().get("itemHardShell"), 1],
				[Registry<Addcontents, ItemType>().get("itemPearl"), 1]
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
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemSnailMucus"), 1, 1),
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
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemSnailMeat"), 1, 1),
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
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemScallop"), 1, 1),
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
			[ActionType.Plant]: Registry<Addcontents, DoodadType>().get("doodadMycenaChlorophos")
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
		use: [ActionType.Build],
		onUse : {
			[ActionType.Build] : Registry<Addcontents, DoodadType>().get("doodadMycenaChlorophosLamp")
		},
		equip : EquipType.Held,
		recipe: {
			components: [
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemMycenaChlorophos"), 2, 2, 2),
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
		worth : 50,
		groups : [ItemTypeGroup.LightSource]
	})
	public itemMycenaChlorophosLamp: ItemType;

	@Register.item("MycenaChlorophosStreetlamp", { //받침애주름버섯 나무 가로등
		decayMax : 100000,
		use: [ActionType.Build],
		onUse : {
			[ActionType.Build] : Registry<Addcontents, DoodadType>().get("doodadMycenaChlorophosStreetlamp")
		},
		recipe: {
			components: [
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemMycenaChlorophosLamp"), 1, 1, 1),
				RecipeComponent(ItemType.Log, 2, 2, 2),
				RecipeComponent(ItemType.WoodenPole, 1, 1, 1),
				RecipeComponent(ItemType.String, 2, 2, 2),
				RecipeComponent(ItemType.WoodenDowels, 4, 4, 4),
				RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0),
			],
			skill: SkillType.Woodworking,
			level: RecipeLevel.Expert,
			reputation: 100
		},
		durability: 150,
		weight: 0.5,
		worth : 150,
		groups : [ItemTypeGroup.LightSource]
	})
	public itemMycenaChlorophosStreetlamp: ItemType;

	@Register.item("MycenaChlorophosIronStreetlamp", { //받침애주름버섯 철제 가로등
		decayMax : 100000,
		use: [ActionType.Build],
		onUse : {
			[ActionType.Build] : Registry<Addcontents, DoodadType>().get("doodadMycenaChlorophosIronStreetlamp")
		},
		recipe: {
			components: [
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemMycenaChlorophosLamp"), 1, 1, 1),
				RecipeComponent(ItemType.IronIngot, 4, 4, 4),
				RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0),
			],
			skill: SkillType.Blacksmithing,
			requiresFire : true,
			requiredDoodad: DoodadTypeGroup.Anvil,
			level: RecipeLevel.Expert,
			reputation: 100
		},
		durability: 150,
		weight: 4.5,
		worth : 150,
		groups : [ItemTypeGroup.LightSource]
	})
	public itemMycenaChlorophosIronStreetlamp: ItemType;

	@Register.item("StoneCompressionMachine", { //압착기
		use: [ActionType.Build],
		onUse : {
			[ActionType.Build] : Registry<Addcontents, DoodadType>().get("doodadStoneCompressionMachine")
		},
		recipe: {
			components: [
				RecipeComponent(ItemType.LargeRock, 3, 3, 3),
				RecipeComponent(ItemType.Log, 4, 4, 4),
				RecipeComponent(ItemType.WoodenDowels, 4, 4, 4),
				RecipeComponent(ItemTypeGroup.Hammer, 1, 0, 0),
			],
			skill: SkillType.Stonecrafting,
			level: RecipeLevel.Intermediate,
			reputation: 100
		},
		durability: 150,
		weight: 5,
		worth : 50,
		groups : [ItemTypeGroup.Tool]
	})
	public itemStoneCompressionMachine: ItemType;

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
		use: [ActionType.Rest, ActionType.Sleep , ActionType.PlaceDown],
		recipe : {
			components: [
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemPillow"), 1, 1, 1),
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
		doodad : {
			isFlammable: true,
			repairItem: Registry<Addcontents, ItemType>().get("itemWoodenBed"),
			reduceDurabilityOnGather: true
		}
	})
	public itemWoodenBed: ItemType;

	@Register.item("Pomegranate", { //석류
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [1, 5, 8, 4]
		},
		returnOnUse: [Registry<Addcontents, ItemType>().get("itemPomegranateSeeds"), true],
		dismantle: {
			items: [[Registry<Addcontents, ItemType>().get("itemPomegranateSeeds"), 1]],
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
			[ActionType.Plant]: Registry<Addcontents, DoodadType>().get("doodadPomegranateTree")
		},
		skillUse : SkillType.Botany,
		disassemble: false,
		weight: 0.1,
		worth : 15,
		groups : [ItemTypeGroup.Seed]
	})
	public itemPomegranateSeeds: ItemType;

	@Register.item("CamelliaJaponicaFruit", { //동백 열매
		dismantle: {
			items: [[Registry<Addcontents, ItemType>().get("itemCamelliaJaponicaSeeds"), 3]],
			skill: SkillType.Botany,
			required: ItemTypeGroup.Sharpened
		},
		decayMax : 10000,
		disassemble: true,
		durability: 10,
		weight: 0.2,
		worth : 5,
		groups : [ItemTypeGroup.Food]
	})
	public itemCamelliaJaponicaFruit: ItemType;

	@Register.item("CamelliaJaponicaSeeds", { //동백 씨앗
		use: [ActionType.Plant, ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [0, 1, 1, -1],
			[ActionType.Plant]: Registry<Addcontents, DoodadType>().get("doodadCamelliaJaponica")
		},
		skillUse : SkillType.Botany,
		disassemble: false,
		weight: 0.1,
		worth : 15,
		groups : [ItemTypeGroup.Seed]
	})
	public itemCamelliaJaponicaSeeds: ItemType;

	@Register.item("ClayJugOfCamelliaJaponicaOil", { //동백 기름이 담긴 호리병
		use : [Registry<Addcontents, ActionType>().get("actionAddOil")],
		recipe : {
			components: [
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemCamelliaJaponicaSeeds"), 10, 10, 10),
				RecipeComponent(ItemType.ClayJug, 1, 1, 1),
			],
			skill: SkillType.Tinkering,
			requiredDoodad: Registry<Addcontents, DoodadType>().get("doodadStoneCompressionMachine"),
			level: RecipeLevel.Simple,
			reputation: -100
		},
		disassemble: false,
		weight: 1,
		worth : 100,
		groups : [ItemTypeGroup.Fuel]
	})
	public itemClayJugOfCamelliaJaponicaOil: ItemType;

	@Register.item("GlassBottleOfCamelliaJaponicaOil", { //동백 기름이 담긴 유리병
		recipe : {
			components: [
				RecipeComponent(Registry<Addcontents, ItemType>().get("itemCamelliaJaponicaSeeds"), 10, 10, 10),
				RecipeComponent(ItemType.GlassBottle, 1, 1, 1),
			],
			skill: SkillType.Tinkering,
			requiredDoodad: Registry<Addcontents, DoodadType>().get("doodadStoneCompressionMachine"),
			level: RecipeLevel.Simple,
			reputation: -100
		},
		disassemble: false,
		weight: 1,
		worth : 100,
		groups : [ItemTypeGroup.Fuel]
	})
	public itemGlassBottleOfCamelliaJaponicaOil: ItemType;

	@Register.item("Ice", { //얼음
		decayMax : 1000,
		use: [ActionType.Eat],
		onUse : {
			[ActionType.Eat]: [1, -1, 0, 5],
		},
		disassemble: false,
		weight: 0.3,
		worth : 100,
		groups : [ItemTypeGroup.Food]
	})
	public itemIce: ItemType;

	@Register.item("Lantern", { //랜턴
		attack : 1,
		damageType : DamageType.Blunt,
		use: [ Registry<Addcontents, ActionType>().get("actionLightUp") ,ActionType.Build],
		onUse : {
			[ActionType.Build] : Registry<Addcontents, DoodadType>().get("doodadLantern")
		},
		equip : EquipType.Held,
		recipe: {
			components: [
				RecipeComponent(ItemType.IronIngot, 3, 3, 3),
				RecipeComponent(ItemType.SheetOfGlass, 1, 1, 1),
				RecipeComponent(ItemType.String, 2, 2, 2)
			],
			requiresFire : true,
			requiredDoodad : DoodadTypeGroup.Anvil,
			skill: SkillType.Blacksmithing,
			level: RecipeLevel.Intermediate,
			reputation: -50
		},
		durability: 50,
		weight: 0.8,
		worth : 50,
		groups : [ItemTypeGroup.LightSource]
	})
	public itemLantern: ItemType;

	@Register.item("LitLantern", { //불이 켜진 랜턴
		attack : 1,
		damageType : DamageType.Blunt,
		decayMax : 200000,
		decaysInto : ItemType.GlassBottle,
		use: [ActionType.Build],
		onUse : {
			[ActionType.Build] : Registry<Addcontents, DoodadType>().get("doodadLitLantern")
		},
		equip : EquipType.Held,
		onEquipEffect : [OnEquipType.LightSource, 4],
		durability: 50,
		weight: 0.8,
		worth : 50,
		groups : [ItemTypeGroup.LightSource]
	})
	public itemLitLantern: ItemType;

	@Register.item("WroughtIronLantern", { //연철랜턴
		attack : 1,
		damageType : DamageType.Blunt,
		decaysInto : ItemType.GlassBottle,
		use: [ Registry<Addcontents, ActionType>().get("actionLightUp") ,ActionType.Build],
		onUse : {
			[ActionType.Build] : Registry<Addcontents, DoodadType>().get("doodadWroughtIronLantern")
		},
		equip : EquipType.Held,
		recipe: {
			components: [
				RecipeComponent(ItemType.WroughtIron, 3, 3, 3),
				RecipeComponent(ItemType.SheetOfGlass, 1, 1, 1),
				RecipeComponent(ItemType.String, 2, 2, 2)
			],
			requiresFire : true,
			requiredDoodad : DoodadTypeGroup.Anvil,
			skill: SkillType.Blacksmithing,
			level: RecipeLevel.Intermediate,
			reputation: -50
		},
		durability: 50,
		weight: 0.8,
		worth : 50,
		groups : [ItemTypeGroup.LightSource]
	})
	public itemWroughtIronLantern: ItemType;

	@Register.item("LitWroughtIronLantern", { //불이 켜진 연철 랜턴
		attack : 1,
		damageType : DamageType.Blunt,
		decayMax : 200000,
		decaysInto : ItemType.GlassBottle,
		use: [ActionType.Build],
		onUse : {
			[ActionType.Build] : Registry<Addcontents, DoodadType>().get("doodadLitWroughtIronLantern")
		},
		equip : EquipType.Held,
		onEquipEffect : [OnEquipType.LightSource, 4],
		durability: 50,
		weight: 0.8,
		worth : 50,
		groups : [ItemTypeGroup.LightSource]
	})
	public itemLitWroughtIronLantern: ItemType;
	////////////////////////////////////
	// Doodads
	//

	@Register.doodad("MycenaChlorophos", { //받침에주름버섯
		spreadMax: 3,
		gather: {
			[GrowingStage.Flowering]:[
				{type: Registry<Addcontents, ItemType>().get("itemMycenaChlorophos")},
			],
			[GrowingStage.Ripening]:[
				{type: Registry<Addcontents, ItemType>().get("itemMycenaChlorophos")},
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
		group : DoodadTypeGroup.GatheredPlant,
		providesLight : -1
	})
	public doodadMycenaChlorophos: DoodadType;

	@Register.doodad("MycenaChlorophosLamp", { //받침에주름버섯 램프
		pickUp: [Registry<Addcontents, ItemType>().get("itemMycenaChlorophosLamp")],
		decayMax : 100000,
		reduceDurabilityOnGather: true,
		providesLight : 1
	})
	public doodadMycenaChlorophosLamp: DoodadType;

	@Register.doodad("MycenaChlorophosStreetlamp", { //받침에주름버섯 램프 나무 가로등
		isTall : true,
		blockMove : true,
		pickUp: [Registry<Addcontents, ItemType>().get("itemMycenaChlorophosStreetlamp")],
		decayMax : 100000,
		reduceDurabilityOnGather: true,
		providesLight : 2
	})
	public doodadMycenaChlorophosStreetlamp: DoodadType;

	@Register.doodad("MycenaChlorophosIronStreetlamp", { //받침에주름버섯 램프 철제 가로등
		isTall : true,
		blockMove : true,
		pickUp: [Registry<Addcontents, ItemType>().get("itemMycenaChlorophosIronStreetlamp")],
		decayMax : 100000,
		reduceDurabilityOnGather: true,
		providesLight : 2
	})
	public doodadMycenaChlorophosIronStreetlamp: DoodadType;

	@Register.doodad("Lantern", { //랜턴
		pickUp: [Registry<Addcontents, ItemType>().get("itemLantern")],
		reduceDurabilityOnGather: true
	})
	public doodadLantern: DoodadType;

	@Register.doodad("LitLantern", { //불이 켜진 랜턴
		isAnimated: true,
		decayMax : 500000,
		pickUp: [Registry<Addcontents, ItemType>().get("itemLitLantern")],
		reduceDurabilityOnGather: true,
		providesLight : 4
	})
	public doodadLitLantern: DoodadType;

	@Register.doodad("WroughtIronLantern", { //연철랜턴
		pickUp: [Registry<Addcontents, ItemType>().get("itemWroughtIronLantern")],
		reduceDurabilityOnGather: true
	})
	public doodadWroughtIronLantern: DoodadType;

	@Register.doodad("LitWroughtIronLantern", { //불이 켜진 연철 랜턴
		isAnimated: true,
		decayMax : 500000,
		pickUp: [Registry<Addcontents, ItemType>().get("itemLitWroughtIronLantern")],
		reduceDurabilityOnGather: true,
		providesLight : 4
	})
	public doodadLitWroughtIronLantern: DoodadType;

	@Register.doodad("StoneCompressionMachine", { //압착기
		isTall : true,
		blockMove : true,
		pickUp: [Registry<Addcontents, ItemType>().get("itemStoneCompressionMachine")],
		reduceDurabilityOnGather: true
	})
	public doodadStoneCompressionMachine: DoodadType;

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
				{type: Registry<Addcontents, ItemType>().get("itemPomegranate")},
				{type: Registry<Addcontents, ItemType>().get("itemPomegranate")},
				{type: Registry<Addcontents, ItemType>().get("itemPomegranate")},
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
				{type: Registry<Addcontents, ItemType>().get("itemPomegranate")},
				{type: Registry<Addcontents, ItemType>().get("itemPomegranate")},
				{type: Registry<Addcontents, ItemType>().get("itemPomegranate")}
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

	@Register.doodad("CamelliaJaponica", { //동백 나무
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
				{type: Registry<Addcontents, ItemType>().get("itemCamelliaJaponicaFruit")},
				{type: Registry<Addcontents, ItemType>().get("itemCamelliaJaponicaFruit")},
				{type: Registry<Addcontents, ItemType>().get("itemCamelliaJaponicaFruit")},
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
				{type: Registry<Addcontents, ItemType>().get("itemCamelliaJaponicaFruit")},
				{type: Registry<Addcontents, ItemType>().get("itemCamelliaJaponicaFruit")},
				{type: Registry<Addcontents, ItemType>().get("itemCamelliaJaponicaFruit")}
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
	public doodadCamelliaJaponica: DoodadType;

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
			{item: Registry<Addcontents, ItemType>().get("itemHardShell")},
			{item: Registry<Addcontents, ItemType>().get("itemCrabMeat")}
		],
		aberrantResource: [
			{item: Registry<Addcontents, ItemType>().get("itemHardShell")},
			{item: Registry<Addcontents, ItemType>().get("itemAberrantCrabMeat")}
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
			{item: Registry<Addcontents, ItemType>().get("itemSnailMucus")},
			{item: Registry<Addcontents, ItemType>().get("itemSnailMeat")},
			{item: Registry<Addcontents, ItemType>().get("itemHardShell")}
		],
		aberrantResource: [
			{item: Registry<Addcontents, ItemType>().get("itemSnailMucus")},
			{item: Registry<Addcontents, ItemType>().get("itemSnailMeat")},
			{item: Registry<Addcontents, ItemType>().get("itemHardShell")},
			{item: Registry<Addcontents, ItemType>().get("itemCloakCoveredWithMucus"), chance: 1}
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
		acceptedItems: [ItemType.RawCod, ItemType.RawBlindfish],
		skipMovementChance: 3,
		waterAnimations : true
	},{
		resource:[
			{item: Registry<Addcontents, ItemType>().get("itemSmoothSkin")},
			{item: Registry<Addcontents, ItemType>().get("itemRabbitRobe"), chance: 1},
			{item: ItemType.RawMeat},
			{item: ItemType.Offal},
			{item: ItemType.AnimalFat}
		],
		aberrantResource: [
			{item: Registry<Addcontents, ItemType>().get("itemSmoothSkin")},
			{item: Registry<Addcontents, ItemType>().get("itemRabbitRobe"), chance: 1},
			{item: ItemType.RawMeat},
			{item: ItemType.Offal},
			{item: ItemType.AnimalFat}
		],
		decay:12200,
		skill:SkillType.Anatomy
	})
	public creatureNessie: CreatureType;

	@Register.creature("IceElemental", { // 얼음정령
		minhp: 15,
		maxhp: 19,
		minatk: 14,
		maxatk: 21,
		defense: new Defense(5,new Resistances(DamageType.Blunt, 50),new Vulnerabilities(DamageType.Fire, 10)),
		damageType: DamageType.Blunt,
		ai: AiType.Hostile,
		moveType: MoveType.Flying,
		lootGroup: LootGroupType.FireElemental,
		spawnTiles: SpawnableTiles.All,
		spawnReputation : -3e4,
		makeNoise : true,
		reputation: 250,
		tamingDifficulty: 300,
		spawnGroup: [SpawnGroup.Guardians, SpawnGroup.StrongGuardians],
		noStumble: true,
		acceptedItems: [Registry<Addcontents, ItemType>().get("itemIce")],
		skipMovementChance: 5,
		tileMissChance : {
			[TileGroup.Wet]: 0.5
		}
	},{
		resource:[
			{item: Registry<Addcontents, ItemType>().get("itemIce")},
			{item: Registry<Addcontents, ItemType>().get("itemRabbitRobe"), chance: 1}
		],
		aberrantResource: [
			{item: Registry<Addcontents, ItemType>().get("itemIce")},
			{item: Registry<Addcontents, ItemType>().get("itemRabbitRobe"), chance: 1}
		],
		decay:12200,
		skill:SkillType.Anatomy,
		animated : true
	})
	public creatureIceElemental: CreatureType;

	@Register.creature("SnowMan", { // 눈사람
		minhp: 15,
		maxhp: 19,
		minatk: 14,
		maxatk: 21,
		defense: new Defense(5,new Resistances(),new Vulnerabilities(DamageType.Slashing, 50)),
		damageType: DamageType.Blunt,
		ai: AiType.Hostile,
		moveType: MoveType.Land,
		lootGroup: LootGroupType.FireElemental,
		spawnTiles: SpawnableTiles.All,
		spawnReputation : -3e4,
		makeNoise : true,
		reputation: 250,
		tamingDifficulty: 300,
		spawnGroup: [SpawnGroup.Guardians, SpawnGroup.StrongGuardians],
		noStumble: true,
		acceptedItems: [ItemType.PileOfSnow],
		skipMovementChance: 5,
		tileMissChance : {
			[TileGroup.Wet]: 0.5
		}
	},{
		resource:[
			{item: ItemType.PileOfSnow},
			{item: ItemType.Branch},
			{item: ItemType.Carrot}
		],
		aberrantResource: [
			{item: ItemType.PileOfSnow},
			{item: ItemType.Branch},
			{item: ItemType.Carrot}
		],
		decay:12200,
		skill:SkillType.Anatomy
	})
	public creatureSnowMan: CreatureType;

	////////////////////////////////////
	// Terrain
	//
	@Register.terrain("MudFlat", {
		tillable : true,
		passable: true,
		particles: { r: 171, g: 176, b: 179 },
		resources: [
			{ type: Registry<Addcontents, ItemType>().get("itemPearlOyster"), chance: 2},
			{ type: Registry<Addcontents, ItemType>().get("itemScallop"), chance: 5},
			{ type: Registry<Addcontents, ItemType>().get("itemMud"), chance: 30, tileChange : TerrainType.Dirt},
		]
	})
	public terrainMudFlat: TerrainType;

	////////////////////////////////////
	// Fields
	//
	@Mod.saveData<Addcontents>("Addcontents")
	public data: IAddcontentsData;
	public firstLoad = true;

	public initializeSaveData(data?: IAddcontentsData) {
		if (data) {
			this.firstLoad = false;
			return data;
		}

		this.firstLoad = true;
		return {
			seed: new Date().getTime()
		};
	}

	////////////////////////////////////
	// Hook
	//
	@HookMethod
	public onCreateWorld(world: IWorld): void {
		//world.addLayer(Troposphere.troposphereZ);
	}

	@HookMethod
	public preLoadWorldDifferences(generateNewWorld: boolean) {
		Random.generator.setSeed(this.data.seed);
	}

	public itemData: any;
	@HookMethod
	public onBuild(human: Human, item: IItem, tile: ITile, doodad: IDoodad) { //build
		if(item.decay !== undefined){
			doodad.decay = item.decay;
		}
	}

	@HookMethod
	public onPickupDoodad(player: IPlayer, doodad: IDoodad) { //get end
		if(doodad.decay !== undefined){
			game.items[this.itemData].decay = doodad.decay;
		}
	};

	@HookMethod
	public onInventoryItemAdd(player: IPlayer | undefined,item: IItem, container: IContainer) { //get first
		if(item.decay !== undefined){
			let id = item.id;
			this.itemData = id;
		}
	};
}
