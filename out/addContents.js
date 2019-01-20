var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "action/IAction", "entity/IEntity", "item/Items", "creature/ICreature", "mod/Mod", "mod/ModRegistry"], function (require, exports, Enums_1, IAction_1, IEntity_1, Items_1, ICreature_1, Mod_1, ModRegistry_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AddContents extends Mod_1.default {
        constructor() {
            super(...arguments);
            this.firstLoad = true;
        }
        onLoad() {
        }
        onUnload() {
        }
    }
    __decorate([
        ModRegistry_1.default.item("CrabMeat", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [1, 1, 1, -4],
            },
            skillUse: Enums_1.SkillType.Anatomy,
            decayMax: 1500,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.RawMeat]
        })
    ], AddContents.prototype, "itemCrabMeat", void 0);
    __decorate([
        ModRegistry_1.default.item("CookedCrabMeat", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [1, 2, 2, -1],
            },
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemCrabMeat"), 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Tongs, 1, 0)
                ],
                requiresFire: true,
                skill: Enums_1.SkillType.Cooking,
                level: Enums_1.RecipeLevel.Simple,
                reputation: 15
            },
            decayMax: 1500,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.Meat]
        })
    ], AddContents.prototype, "itemCookedCrabMeat", void 0);
    __decorate([
        ModRegistry_1.default.item("AberrantCrabMeat", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [1, 1, 1, -4],
            },
            skillUse: Enums_1.SkillType.Anatomy,
            decayMax: 1500,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.RawMeat]
        })
    ], AddContents.prototype, "itemAberrantCrabMeat", void 0);
    __decorate([
        ModRegistry_1.default.item("CookedAberrantCrabMeat", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [1, 3, 3, -1],
            },
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemAberrantCrabMeat"), 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Tongs, 1, 0)
                ],
                requiresFire: true,
                skill: Enums_1.SkillType.Cooking,
                level: Enums_1.RecipeLevel.Simple,
                reputation: 15
            },
            decayMax: 1500,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.Meat]
        })
    ], AddContents.prototype, "itemCookedAberrantCrabMeat", void 0);
    __decorate([
        ModRegistry_1.default.item("MycenaChlorophos", {
            use: [IAction_1.ActionType.Eat, IAction_1.ActionType.Plant],
            onUse: {
                [IAction_1.ActionType.Eat]: [-2, 2, 2, -2],
                [IAction_1.ActionType.Plant]: ModRegistry_1.Registry().get("doodadMycenaChlorophos")
            },
            skillUse: Enums_1.SkillType.Mycology,
            decayMax: 50000,
            disassemble: false,
            durability: 15,
            weight: 0.3,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.Food]
        })
    ], AddContents.prototype, "itemMycenaChlorophos", void 0);
    __decorate([
        ModRegistry_1.default.item("MycenaChlorophosLamp", {
            attack: 1,
            damageType: Enums_1.DamageType.Blunt,
            decayMax: 100000,
            use: [IAction_1.ActionType.Build],
            equip: Enums_1.EquipType.Held,
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemMycenaChlorophos"), 2, 2, 2),
                    Items_1.RecipeComponent(Enums_1.ItemType.GlassBottle, 1, 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Pulp, 1, 1, 1)
                ],
                skill: Enums_1.SkillType.Tinkering,
                level: Enums_1.RecipeLevel.Intermediate,
                reputation: 10
            },
            onEquipEffect: [Enums_1.OnEquipType.LightSource, 1],
            durability: 50,
            weight: 0.8,
            worth: 50
        })
    ], AddContents.prototype, "itemMycenaChlorophosLamp", void 0);
    __decorate([
        ModRegistry_1.default.item("Pillow", {
            recipe: {
                components: [
                    Items_1.RecipeComponent(Enums_1.ItemType.Cotton, 4, 4, 4),
                    Items_1.RecipeComponent(Enums_1.ItemType.Feather, 4, 4, 4),
                    Items_1.RecipeComponent(Enums_1.ItemType.CottonFabric, 2, 2, 2),
                    Items_1.RecipeComponent(Enums_1.ItemType.String, 2, 2, 2),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Needle, 1, 0, 0),
                ],
                skill: Enums_1.SkillType.Tailoring,
                level: Enums_1.RecipeLevel.Advanced,
                reputation: 5
            },
            durability: 25,
            weight: 1,
            worth: 100
        })
    ], AddContents.prototype, "itemPillow", void 0);
    __decorate([
        ModRegistry_1.default.item("WoodenBed", {
            use: [IAction_1.ActionType.Rest, IAction_1.ActionType.Sleep, IAction_1.ActionType.PlaceDown],
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemPillow"), 1, 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemType.CottonBedroll, 1, 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemType.Log, 3, 3, 3),
                    Items_1.RecipeComponent(Enums_1.ItemType.WoodenDowels, 4, 4, 4),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Hammer, 1, 0, 0),
                ],
                skill: Enums_1.SkillType.Woodworking,
                level: Enums_1.RecipeLevel.Expert,
                reputation: 100
            },
            disassemble: true,
            hasSleepImage: true,
            flammable: true,
            durability: 500,
            groups: [Enums_1.ItemTypeGroup.Bedding],
            worth: 400,
            doodad: {
                isFlammable: true,
                repairItem: ModRegistry_1.Registry().get("itemWoodenBed"),
                reduceDurabilityOnGather: true
            }
        })
    ], AddContents.prototype, "itemWoodenBed", void 0);
    __decorate([
        ModRegistry_1.default.item("Pomegranate", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [1, 5, 8, 4]
            },
            dismantle: {
                items: [[Enums_1.ItemType.AppleSeeds, 1]],
                skill: Enums_1.SkillType.Botany,
                required: Enums_1.ItemTypeGroup.Sharpened
            },
            decayMax: 10000,
            disassemble: true,
            durability: 15,
            weight: 0.5,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.Food]
        })
    ], AddContents.prototype, "itemPomegranate", void 0);
    __decorate([
        ModRegistry_1.default.item("PomegranateSeeds", {
            use: [IAction_1.ActionType.Eat, IAction_1.ActionType.Plant],
            onUse: {
                [IAction_1.ActionType.Eat]: [0, 1, 1, -1],
            },
            disassemble: false,
            weight: 0.1,
            worth: 15,
            groups: [Enums_1.ItemTypeGroup.Seed]
        })
    ], AddContents.prototype, "itemPomegranateSeeds", void 0);
    __decorate([
        ModRegistry_1.default.doodad("MycenaChlorophos", {
            spreadMax: 3,
            gather: {
                [Enums_1.GrowingStage.Flowering]: [
                    { type: ModRegistry_1.Registry().get("itemMycenaChlorophos") },
                ],
                [Enums_1.GrowingStage.Ripening]: [
                    { type: ModRegistry_1.Registry().get("itemMycenaChlorophos") },
                ]
            },
            skillUse: Enums_1.SkillType.Mycology,
            allowedTiles: [Enums_1.TerrainType.Dirt, Enums_1.TerrainType.FertileSoil, Enums_1.TerrainType.Grass, Enums_1.TerrainType.WoodenFlooring],
            canTrampleWhenMature: true,
            canGrowInCaves: true,
            isFlammable: true,
            graphicVariation: true,
            particles: { r: 202, g: 16, b: 16 },
            canGrow: true,
            decayMax: 20000,
            isFungi: true,
            group: Enums_1.DoodadTypeGroup.GatheredPlant,
            providesLight: 1
        })
    ], AddContents.prototype, "doodadMycenaChlorophos", void 0);
    __decorate([
        ModRegistry_1.default.creature("SeaCrab", {
            minhp: 2,
            maxhp: 3,
            minatk: 1,
            maxatk: 2,
            defense: new Enums_1.Defense(1, new Enums_1.Resistances(Enums_1.DamageType.Blunt), new Enums_1.Vulnerabilities(Enums_1.DamageType.Slashing)),
            damageType: Enums_1.DamageType.Slashing,
            ai: IEntity_1.AiType.Scared,
            moveType: Enums_1.MoveType.WetLand | Enums_1.MoveType.ShallowWater | Enums_1.MoveType.Land,
            spawnTiles: ICreature_1.SpawnableTiles.Wet,
            reputation: -200,
            jumpOver: true,
            tamingDifficulty: 25,
            noStumble: true,
            spawnReputation: 8e3,
            spawnGroup: [ICreature_1.SpawnGroup.FreshWater],
            skipMovementChance: 2
        }, {
            resource: [
                { item: ModRegistry_1.Registry().get("itemCrabMeat") }
            ],
            aberrantResource: [
                { item: ModRegistry_1.Registry().get("itemAberrantCrabMeat") }
            ],
            decay: 2200,
            skill: Enums_1.SkillType.Anatomy
        })
    ], AddContents.prototype, "creatureSeaCrab", void 0);
    __decorate([
        Mod_1.default.saveData("AddContents")
    ], AddContents.prototype, "data", void 0);
    __decorate([
        Mod_1.default.instance("AddContents")
    ], AddContents, "INSTANCE", void 0);
    exports.default = AddContents;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ29udGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hZGRDb250ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFZQSxNQUFxQixXQUFZLFNBQVEsYUFBRztRQUE1Qzs7WUEwUVEsY0FBUyxHQUFHLElBQUksQ0FBQztRQWF6QixDQUFDO1FBUk8sTUFBTTtRQUNiLENBQUM7UUFLTSxRQUFRO1FBQ2YsQ0FBQztLQUNEO0lBblFBO1FBYkMscUJBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLEdBQUcsRUFBRSxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3JCLEtBQUssRUFBRztnQkFDUCxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMvQjtZQUNELFFBQVEsRUFBRyxpQkFBUyxDQUFDLE9BQU87WUFDNUIsUUFBUSxFQUFHLElBQUk7WUFDZixXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFHLENBQUM7WUFDVCxNQUFNLEVBQUcsQ0FBQyxxQkFBYSxDQUFDLE9BQU8sQ0FBQztTQUNoQyxDQUFDO3FEQUM0QjtJQXdCOUI7UUF0QkMscUJBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDaEMsR0FBRyxFQUFFLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUM7WUFDckIsS0FBSyxFQUFHO2dCQUNQLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsTUFBTSxFQUFFO2dCQUNQLFVBQVUsRUFBRTtvQkFDWCx1QkFBZSxDQUFDLHNCQUFRLEVBQXlCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxF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