var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "action/IAction", "item/Items", "mod/Mod", "mod/ModRegistry"], function (require, exports, Enums_1, IAction_1, Items_1, Mod_1, ModRegistry_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AddContents extends Mod_1.default {
        onLoad() {
            Items_1.itemGroupDescriptions[Enums_1.ItemTypeGroup.Food].types.push(this.itemLuminousMushroom);
            Items_1.itemGroupDescriptions[Enums_1.ItemTypeGroup.LightSource].types.push(this.itemLuminousMushroomLamp);
        }
        onUnload() {
            const foodItems = Items_1.itemGroupDescriptions[Enums_1.ItemTypeGroup.Food].types;
            const lightSourceItems = Items_1.itemGroupDescriptions[Enums_1.ItemTypeGroup.LightSource].types;
            foodItems.splice(foodItems.indexOf(this.itemLuminousMushroom), 1);
            lightSourceItems.splice(foodItems.indexOf(this.itemLuminousMushroomLamp), 1);
        }
    }
    __decorate([
        ModRegistry_1.default.item("LuminousMushroom", {
            use: [IAction_1.ActionType.Eat, IAction_1.ActionType.Plant],
            onUse: {
                [IAction_1.ActionType.Eat]: [-2, 2, 2, -2],
                [IAction_1.ActionType.Plant]: Enums_1.DoodadType[18]
            },
            skillUse: Enums_1.SkillType.Mycology,
            decayMax: 20000,
            disassemble: false,
            durability: 15,
            weight: 0.3,
            worth: 5
        })
    ], AddContents.prototype, "itemLuminousMushroom", void 0);
    __decorate([
        ModRegistry_1.default.item("LuminousMushroomLamp", {
            attack: 1,
            damageType: Enums_1.DamageType.Blunt,
            decayMax: 50000,
            use: [IAction_1.ActionType.Build],
            equip: Enums_1.EquipType.Held,
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemLuminousMushroom"), 2, 2, 2),
                    Items_1.RecipeComponent(Enums_1.ItemType.GlassBottle, 1, 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Pulp, 1, 1, 1)
                ],
                skill: Enums_1.SkillType.Tinkering,
                level: Enums_1.RecipeLevel.Intermediate,
                reputation: 10
            },
            onEquipEffect: [0, 0],
            durability: 50,
            weight: 0.8,
            worth: 50
        })
    ], AddContents.prototype, "itemLuminousMushroomLamp", void 0);
    __decorate([
        ModRegistry_1.default.doodad("LuminousMushroom", {
            decayMax: 20000,
            allowedTiles: [8, 29, 6, 24],
            canGrow: true,
            canGrowInCaves: true,
            canTrampleWhenMature: true,
            gather: {
                4: [
                    { type: this.itemLuminousMushroom }
                ],
                5: [
                    { type: this.itemLuminousMushroom }
                ]
            },
            gatherSkillUse: Enums_1.SkillType.Mycology,
            graphicVariation: true,
            isFlammable: true,
            isFungi: true,
            particles: { r: 132, g: 96, b: 44 },
            spreadMax: 3,
            providesLight: 1
        })
    ], AddContents.prototype, "doodadLuminousMushroom", void 0);
    exports.default = AddContents;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ29udGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hZGRDb250ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFNQSxNQUFxQixXQUFZLFNBQVEsYUFBRztRQUlwQyxNQUFNO1lBQ1osNkJBQXFCLENBQUMscUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1lBQy9FLDZCQUFxQixDQUFDLHFCQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUMzRixDQUFDO1FBS00sUUFBUTtZQUNkLE1BQU0sU0FBUyxHQUFHLDZCQUFxQixDQUFDLHFCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2xFLE1BQU0sZ0JBQWdCLEdBQUcsNkJBQXFCLENBQUMscUJBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDaEYsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlFLENBQUM7S0F1RUQ7SUFyREE7UUFiQyxxQkFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNsQyxHQUFHLEVBQUUsQ0FBQyxvQkFBVSxDQUFDLEdBQUcsRUFBRSxvQkFBVSxDQUFDLEtBQUssQ0FBQztZQUN2QyxLQUFLLEVBQUc7Z0JBQ1AsQ0FBQyxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxvQkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLGtCQUFVLENBQUMsRUFBRSxDQUFDO2FBQ2xDO1lBQ0QsUUFBUSxFQUFHLGlCQUFTLENBQUMsUUFBUTtZQUM3QixRQUFRLEVBQUcsS0FBSztZQUNoQixXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFHLENBQUM7U0FDVCxDQUFDOzZEQUNvQztJQXVCdEM7UUFyQkMscUJBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDdEMsTUFBTSxFQUFHLENBQUM7WUFDVixVQUFVLEVBQUcsa0JBQVUsQ0FBQyxLQUFLO1lBQzdCLFFBQVEsRUFBRyxLQUFLO1lBQ2hCLEdBQUcsRUFBRSxDQUFDLG9CQUFVLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLEtBQUssRUFBRyxpQkFBUyxDQUFDLElBQUk7WUFDdEIsTUFBTSxFQUFFO2dCQUNQLFVBQVUsRUFBRTtvQkFDWCx1QkFBZSxDQUFDLHNCQUFRLEVBQXlCLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZGLHVCQUFlLENBQUMsZ0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzlDLHVCQUFlLENBQUMscUJBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzVDO2dCQUNELEtBQUssRUFBRSxpQkFBUyxDQUFDLFNBQVM7Z0JBQzFCLEtBQUssRUFBRSxtQkFBVyxDQUFDLFlBQVk7Z0JBQy9CLFVBQVUsRUFBRSxFQUFFO2FBQ2Q7WUFDRCxhQUFhLEVBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEdBQUc7WUFDWCxLQUFLLEVBQUcsRUFBRTtTQUNWLENBQUM7aUVBQ3dDO0lBNkIxQztRQXZCQyxxQkFBUSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtZQUNwQyxRQUFRLEVBQUcsS0FBSztZQUNoQixZQUFZLEVBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0IsT0FBTyxFQUFHLElBQUk7WUFDZCxjQUFjLEVBQUcsSUFBSTtZQUNyQixvQkFBb0IsRUFBRyxJQUFJO1lBQzNCLE1BQU0sRUFBRztnQkFDUixDQUFDLEVBQUc7b0JBQ0gsRUFBQyxJQUFJLEVBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFDO2lCQUNsQztnQkFDRCxDQUFDLEVBQUc7b0JBQ0gsRUFBQyxJQUFJLEVBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFDO2lCQUNsQzthQUNEO1lBQ0QsY0FBYyxFQUFHLGlCQUFTLENBQUMsUUFBUTtZQUNuQyxnQkFBZ0IsRUFBRyxJQUFJO1lBQ3ZCLFdBQVcsRUFBRyxJQUFJO1lBQ2xCLE9BQU8sRUFBRyxJQUFJO1lBQ2QsU0FBUyxFQUFHLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUM7WUFDakMsU0FBUyxFQUFHLENBQUM7WUFDYixhQUFhLEVBQUcsQ0FBQztTQUNqQixDQUFDOytEQUV3QztJQXZGM0MsOEJBd0ZDIn0=