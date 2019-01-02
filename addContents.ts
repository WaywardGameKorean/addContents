import { DamageType, SkillType, DoodadType, ItemType, ItemTypeGroup, RecipeLevel, EquipType } from "Enums";
import { ActionType } from "action/IAction";
import { itemGroupDescriptions, RecipeComponent } from "item/Items";
import Mod from "mod/Mod";
import Register, { Registry } from "mod/ModRegistry";

export default class AddContents extends Mod {
	/**
	 * Executed when a save is loaded.
	 */
	public onLoad(): void {
		itemGroupDescriptions[ItemTypeGroup.Food].types.push(this.itemLuminousMushroom)
		itemGroupDescriptions[ItemTypeGroup.LightSource].types.push(this.itemLuminousMushroomLamp)
	}

	/**
	 * Executed when a save is unloaded.
	 */
	public onUnload(): void {
		const foodItems = itemGroupDescriptions[ItemTypeGroup.Food].types;
		const lightSourceItems = itemGroupDescriptions[ItemTypeGroup.LightSource].types;
		foodItems.splice(foodItems.indexOf(this.itemLuminousMushroom), 1);
		lightSourceItems.splice(foodItems.indexOf(this.itemLuminousMushroomLamp), 1);
	}

	////////////////////////////////////
	// Items
	//
	@Register.item("LuminousMushroom", {
		use: [ActionType.Eat, ActionType.Plant],
		onUse : {
			[ActionType.Eat]: [-2, 2, 2, -2],
			[ActionType.Plant]: DoodadType[18]//Registry<AddContents, DoodadType>().get("doodadLuminousMushroom")
		},
		skillUse : SkillType.Mycology,
		decayMax : 20000,
		disassemble: false,
		durability: 15,
		weight: 0.3,
		worth : 5
	})
	public itemLuminousMushroom: ItemType;

	@Register.item("LuminousMushroomLamp", {
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

	////////////////////////////////////
	// Doodads
	//

	@Register.doodad("LuminousMushroom", {
		decayMax : 20000,
		allowedTiles : [8, 29, 6, 24],
		canGrow : true,
		canGrowInCaves : true,
		canTrampleWhenMature : true,
		gather : {
			4 : [
				{type : this.itemLuminousMushroom}
			],
			5 : [
				{type : this.itemLuminousMushroom}
			]
		},
		gatherSkillUse : SkillType.Mycology,
		graphicVariation : true,
		isFlammable : true,
		isFungi : true,
		particles : {r: 132, g: 96, b:44},
		spreadMax : 3,
		providesLight : 1
	})

	public doodadLuminousMushroom: DoodadType;
}
