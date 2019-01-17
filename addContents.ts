import { CreatureType, Defense, Resistances, Vulnerabilities, MoveType, DamageType, SkillType, DoodadType, ItemType, ItemTypeGroup, RecipeLevel, EquipType, TerrainType, GrowingStage } from "Enums";
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
		worth : 5
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
		worth : 5
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
		worth : 5
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
		worth : 5
	})
	public itemCookedAberrantCrabMeat: ItemType;

	@Register.item("LuminousMushroom", { //받침애주름버섯
		use: [ActionType.Eat, ActionType.Plant],
		onUse : {
			[ActionType.Eat]: [-2, 2, 2, -2],
			[ActionType.Plant]: Registry<AddContents, DoodadType>().get("doodadLuminousMushroom")
		},
		skillUse : SkillType.Mycology,
		decayMax : 20000,
		disassemble: false,
		durability: 15,
		weight: 0.3,
		worth : 5
	})
	public itemLuminousMushroom: ItemType;

	@Register.item("LuminousMushroomLamp", { //받침애주름버섯
		attack : 1,
		damageType : DamageType.Blunt,
		decayMax : 50000,
		use: [ActionType.Build],
		equip : EquipType.Held,
		recipe: {
			components: [
				RecipeComponent(Registry<AddContents, ItemType>().get("itemLuminousMushroom"), 2, 2, 2),
				RecipeComponent(ItemType.GlassBottle, 1, 1, 1),
				RecipeComponent(ItemTypeGroup.Pulp, 1, 1, 1)
			],
			skill: SkillType.Tinkering,
			level: RecipeLevel.Intermediate,
			reputation: 10
		},
		onEquipEffect : [0, 0],
		durability: 50,
		weight: 0.8,
		worth : 50
	})
	public itemLuminousMushroomLamp: ItemType;

	// @Register.item("Pomegranate", { //석류
	// 	use : []
	// })
	// public itemPomegranate: ItemType;

	////////////////////////////////////
	// Doodads
	//

	@Register.doodad("LuminousMushroom", { //받침에주름버섯 - gather 에러
		skillUse:SkillType.Mycology,
		allowedTiles:[TerrainType.Dirt, TerrainType.FertileSoil, TerrainType.Grass, TerrainType.WoodenFlooring],
		canTrampleWhenMature:true,
		canGrowInCaves:true,
		isFlammable:true,
		graphicVariation:true,
		particles: {r: 243, g: 219, b: 202},
		canGrow:true,
		decayMax:750,
		isFungi:true,
		spreadMax:3, 
		//gather: {
		//	[GrowingStage.Flowering]:[
		//		{type: Registry<AddContents, ItemType>().get("itemLuminousMushroom")},
		//	],
		//	[GrowingStage.Ripening]:[
		//		{type: Registry<AddContents, ItemType>().get("itemLuminousMushroom")}
		//	]
		//}
	})
	public doodadLuminousMushroom: DoodadType;

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
		itemGroupDescriptions[ItemTypeGroup.Food].types.push(this.itemLuminousMushroom)
		itemGroupDescriptions[ItemTypeGroup.RawMeat].types.push(this.itemCrabMeat)
	}

	/**
	 * Executed when a save is unloaded.
	 */
	public onUnload(): void {
		const foodItems = itemGroupDescriptions[ItemTypeGroup.Food].types;
		foodItems.splice(foodItems.indexOf(this.itemLuminousMushroom), 1);
	}
}
