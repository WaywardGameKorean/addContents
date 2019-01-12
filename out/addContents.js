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
        constructor() {
            super(...arguments);
            this.firstLoad = true;
        }
        onLoad() {
            Items_1.itemGroupDescriptions[Enums_1.ItemTypeGroup.Food].types.push(this.itemLuminousMushroom);
        }
        onUnload() {
            const foodItems = Items_1.itemGroupDescriptions[Enums_1.ItemTypeGroup.Food].types;
            foodItems.splice(foodItems.indexOf(this.itemLuminousMushroom), 1);
        }
    }
    __decorate([
        ModRegistry_1.default.item("LuminousMushroom", {
            use: [IAction_1.ActionType.Eat, IAction_1.ActionType.Plant],
            onUse: {
                [IAction_1.ActionType.Eat]: [-2, 2, 2, -2],
                [IAction_1.ActionType.Plant]: ModRegistry_1.Registry().get("doodadLuminousMushroom")
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
            skillUse: Enums_1.SkillType.Mycology,
            allowedTiles: [Enums_1.TerrainType.Dirt, Enums_1.TerrainType.FertileSoil, Enums_1.TerrainType.Grass, Enums_1.TerrainType.WoodenFlooring],
            canTrampleWhenMature: true,
            canGrowInCaves: true,
            isFlammable: true,
            graphicVariation: true,
            particles: { r: 243, g: 219, b: 202 },
            canGrow: true,
            decayMax: 750,
            isFungi: true,
            spreadMax: 3,
            gather: {
                [Enums_1.GrowingStage.Flowering]: [
                    { type: ModRegistry_1.Registry().get("itemLuminousMushroom") },
                ],
            }
        })
    ], AddContents.prototype, "doodadLuminousMushroom", void 0);
    __decorate([
        Mod_1.default.saveData("AddContents")
    ], AddContents.prototype, "data", void 0);
    __decorate([
        Mod_1.default.instance("AddContents")
    ], AddContents, "INSTANCE", void 0);
    exports.default = AddContents;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ29udGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hZGRDb250ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFVQSxNQUFxQixXQUFZLFNBQVEsYUFBRztRQUE1Qzs7WUErRVEsY0FBUyxHQUFHLElBQUksQ0FBQztRQWdCekIsQ0FBQztRQVhPLE1BQU07WUFDWiw2QkFBcUIsQ0FBQyxxQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDaEYsQ0FBQztRQUtNLFFBQVE7WUFDZCxNQUFNLFNBQVMsR0FBRyw2QkFBcUIsQ0FBQyxxQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNsRSxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQztLQUNEO0lBM0VBO1FBYkMscUJBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDbEMsR0FBRyxFQUFFLENBQUMsb0JBQVUsQ0FBQyxHQUFHLEVBQUUsb0JBQVUsQ0FBQyxLQUFLLENBQUM7WUFDdkMsS0FBSyxFQUFHO2dCQUNQLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsb0JBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxzQkFBUSxFQUEyQixDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQzthQUNyRjtZQUNELFFBQVEsRUFBRyxpQkFBUyxDQUFDLFFBQVE7WUFDN0IsUUFBUSxFQUFHLEtBQUs7WUFDaEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRyxDQUFDO1NBQ1QsQ0FBQzs2REFDb0M7SUF1QnRDO1FBckJDLHFCQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ3RDLE1BQU0sRUFBRyxDQUFDO1lBQ1YsVUFBVSxFQUFHLGtCQUFVLENBQUMsS0FBSztZQUM3QixRQUFRLEVBQUcsS0FBSztZQUNoQixHQUFHLEVBQUUsQ0FBQyxvQkFBVSxDQUFDLEtBQUssQ0FBQztZQUN2QixLQUFLLEVBQUcsaUJBQVMsQ0FBQyxJQUFJO1lBQ3RCLE1BQU0sRUFBRTtnQkFDUCxVQUFVLEVBQUU7b0JBQ1gsdUJBQWUsQ0FBQyxzQkFBUSxFQUF5QixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN2Rix1QkFBZSxDQUFDLGdCQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM5Qyx1QkFBZSxDQUFDLHFCQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUM1QztnQkFDRCxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxTQUFTO2dCQUMxQixLQUFLLEVBQUUsbUJBQVcsQ0FBQyxZQUFZO2dCQUMvQixVQUFVLEVBQUUsRUFBRTthQUNkO1lBQ0QsYUFBYSxFQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFHLEVBQUU7U0FDVixDQUFDO2lFQUN3QztJQWdDMUM7UUFyQkMscUJBQVEsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7WUFDcEMsUUFBUSxFQUFDLGlCQUFTLENBQUMsUUFBUTtZQUMzQixZQUFZLEVBQUMsQ0FBQyxtQkFBVyxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLFdBQVcsRUFBRSxtQkFBVyxDQUFDLEtBQUssRUFBRSxtQkFBVyxDQUFDLGNBQWMsQ0FBQztZQUN2RyxvQkFBb0IsRUFBQyxJQUFJO1lBQ3pCLGNBQWMsRUFBQyxJQUFJO1lBQ25CLFdBQVcsRUFBQyxJQUFJO1lBQ2hCLGdCQUFnQixFQUFDLElBQUk7WUFDckIsU0FBUyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUM7WUFDbkMsT0FBTyxFQUFDLElBQUk7WUFDWixRQUFRLEVBQUMsR0FBRztZQUNaLE9BQU8sRUFBQyxJQUFJO1lBQ1osU0FBUyxFQUFDLENBQUM7WUFDWCxNQUFNLEVBQUU7Z0JBQ1AsQ0FBQyxvQkFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFDO29CQUN4QixFQUFDLElBQUksRUFBRSxzQkFBUSxFQUF5QixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFDO2lCQUNyRTthQUlEO1NBQ0QsQ0FBQzsrREFDd0M7SUFHMUM7UUFEQyxhQUFHLENBQUMsUUFBUSxDQUFjLGFBQWEsQ0FBQzs2Q0FDWDtJQTVFOUI7UUFEQyxhQUFHLENBQUMsUUFBUSxDQUFjLGFBQWEsQ0FBQzt1Q0FDSTtJQUY5Qyw4QkErRkMifQ==