import { DamageType, SkillType, DoodadType, ItemType, ItemTypeGroup, RecipeLevel, EquipType, TerrainType, GrowingStage } from "Enums";
import { ActionType } from "action/IAction";
import { itemGroupDescriptions, RecipeComponent } from "item/Items";
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

	@Register.item("LuminousMushroomLamp", { //형광버섯램프
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
		gather: {
			[GrowingStage.Flowering]:[
				{type: Registry<AddContents, ItemType>().get("itemLuminousMushroom")},
			],
			//[GrowingStage.Ripening]:[
			//	{type: Registry<AddContents, ItemType>().get("itemLuminousMushroom")}
			//]
		}
	})
	public doodadLuminousMushroom: DoodadType;

	@Mod.saveData<AddContents>("AddContents")
	public data: IAddContentsData;
	public firstLoad = true;

	/**
	 * Executed when a save is loaded.
	 */
	public onLoad(): void {
		itemGroupDescriptions[ItemTypeGroup.Food].types.push(this.itemLuminousMushroom)
	}

	/**
	 * Executed when a save is unloaded.
	 */
	public onUnload(): void {
		const foodItems = itemGroupDescriptions[ItemTypeGroup.Food].types;
		foodItems.splice(foodItems.indexOf(this.itemLuminousMushroom), 1);
	}
}
