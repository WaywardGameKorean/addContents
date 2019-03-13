var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "action/IAction", "entity/IEntity", "item/Items", "creature/ICreature", "mod/Mod", "mod/ModRegistry", "mod/IHookHost"], function (require, exports, Enums_1, IAction_1, IEntity_1, Items_1, ICreature_1, Mod_1, ModRegistry_1, IHookHost_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AddContents extends Mod_1.default {
        constructor() {
            super(...arguments);
            this.itemData = {};
        }
        onBuild(human, item, tile, doodad) {
            let itemId = item.id;
            let itemDecay = item.decay;
            let doodadId = doodad.id;
            this.itemData[doodadId] = {
                'doodadId': doodadId,
                'itemId': itemId
            };
            doodad.decay = itemDecay;
        }
        onPickupDoodad(player, doodad) {
            let id = doodad.id;
            let decay = doodad.decay;
            let itemId = this.itemData[id].itemId;
            game.items[itemId].decay = decay;
        }
        ;
    }
    __decorate([
        ModRegistry_1.default.item("RabbitRobe", {
            equip: Enums_1.EquipType.Back,
            defense: new Enums_1.Defense(4, new Enums_1.Resistances(Enums_1.DamageType.Blunt, 2, Enums_1.DamageType.Slashing, 2), new Enums_1.Vulnerabilities(Enums_1.DamageType.Piercing, 1)),
            showOverHair: true,
            hideHelmet: true,
            durability: 120,
            weight: 1.2,
            worth: 200
        })
    ], AddContents.prototype, "itemRabbitRobe", void 0);
    __decorate([
        ModRegistry_1.default.item("CloakCoveredWithMucus", {
            equip: Enums_1.EquipType.Back,
            defense: new Enums_1.Defense(4, new Enums_1.Resistances(Enums_1.DamageType.Fire, 2, Enums_1.DamageType.Slashing, 2), new Enums_1.Vulnerabilities(Enums_1.DamageType.Piercing, 1)),
            durability: 120,
            weight: 1.2,
            worth: 200
        })
    ], AddContents.prototype, "itemCloakCoveredWithMucus", void 0);
    __decorate([
        ModRegistry_1.default.item("HardShell", {
            disassemble: false,
            durability: 10,
            weight: 0.5,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.Other]
        })
    ], AddContents.prototype, "itemHardShell", void 0);
    __decorate([
        ModRegistry_1.default.item("HardShellPowder", {
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemHardShell"), 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.MortarAndPestle, 1, 0)
                ],
                requiresFire: false,
                skill: Enums_1.SkillType.Chemistry,
                level: Enums_1.RecipeLevel.Simple,
                reputation: 5
            },
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.Powder, Enums_1.ItemTypeGroup.Compost]
        })
    ], AddContents.prototype, "itemHardShellPowder", void 0);
    __decorate([
        ModRegistry_1.default.item("SmoothSkin", {
            skillUse: Enums_1.SkillType.Anatomy,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 200
        })
    ], AddContents.prototype, "itemSmoothSkin", void 0);
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
            decayMax: 8000,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.CookedMeat]
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
            decayMax: 8000,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.CookedMeat]
        })
    ], AddContents.prototype, "itemCookedAberrantCrabMeat", void 0);
    __decorate([
        ModRegistry_1.default.item("Mud", {
            use: [IAction_1.ActionType.SetDown],
            onUse: {
                [IAction_1.ActionType.SetDown]: ModRegistry_1.Registry().get("terrainMudFlat")
            },
            disassemble: false,
            durability: 10,
            weight: 0.5,
            worth: 5,
        })
    ], AddContents.prototype, "itemMud", void 0);
    __decorate([
        ModRegistry_1.default.item("PearlOyster", {
            disassemble: true,
            dismantle: {
                items: [
                    [ModRegistry_1.Registry().get("itemHardShell"), 1],
                    [ModRegistry_1.Registry().get("itemPearl"), 1]
                ],
                required: Enums_1.ItemTypeGroup.Sharpened,
                skill: Enums_1.SkillType.Anatomy
            },
            durability: 10,
            weight: 1,
            worth: 500,
        })
    ], AddContents.prototype, "itemPearlOyster", void 0);
    __decorate([
        ModRegistry_1.default.item("Pearl", {
            disassemble: false,
            durability: 10,
            weight: 0.8,
            worth: 1000,
        })
    ], AddContents.prototype, "itemPearl", void 0);
    __decorate([
        ModRegistry_1.default.item("SnailMucus", {
            decayMax: 2000,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5
        })
    ], AddContents.prototype, "itemSnailMucus", void 0);
    __decorate([
        ModRegistry_1.default.item("SnailSalveBand", {
            use: [IAction_1.ActionType.Heal, IAction_1.ActionType.HealOther],
            onUse: {
                [IAction_1.ActionType.Heal]: [30, 0, 0, 0],
                [IAction_1.ActionType.HealOther]: 30
            },
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemSnailMucus"), 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemType.Bandage, 1, 0),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Medicinal, 2, 0),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.MortarAndPestle, 1, 0)
                ],
                requiresFire: true,
                skill: Enums_1.SkillType.Tinkering,
                level: Enums_1.RecipeLevel.Intermediate,
                reputation: 25
            },
            disassemble: false,
            durability: 15,
            weight: 0.5,
            worth: 50
        })
    ], AddContents.prototype, "itemSnailSalveBand", void 0);
    __decorate([
        ModRegistry_1.default.item("SnailMeat", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [-2, 0, 2, -2],
            },
            decayMax: 8000,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.RawMeat]
        })
    ], AddContents.prototype, "itemSnailMeat", void 0);
    __decorate([
        ModRegistry_1.default.item("CookedSnailMeat", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [-1, 1, 1, -1],
            },
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemSnailMeat"), 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Tongs, 1, 0)
                ],
                requiresFire: true,
                skill: Enums_1.SkillType.Cooking,
                level: Enums_1.RecipeLevel.Simple,
                reputation: 15
            },
            decayMax: 12000,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.CookedMeat]
        })
    ], AddContents.prototype, "itemCookedSnailMeat", void 0);
    __decorate([
        ModRegistry_1.default.item("Scallop", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [0, 1, 4, -4],
            },
            decayMax: 2000,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.RawMeat]
        })
    ], AddContents.prototype, "itemScallop", void 0);
    __decorate([
        ModRegistry_1.default.item("CookedScallop", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [1, 10, 8, -1],
            },
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemScallop"), 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Tongs, 1, 0)
                ],
                requiresFire: true,
                skill: Enums_1.SkillType.Cooking,
                level: Enums_1.RecipeLevel.Simple,
                reputation: 15
            },
            decayMax: 8000,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.CookedMeat]
        })
    ], AddContents.prototype, "itemCookedScallop", void 0);
    __decorate([
        ModRegistry_1.default.item("MycenaChlorophos", {
            use: [IAction_1.ActionType.Eat, IAction_1.ActionType.Plant],
            onUse: {
                [IAction_1.ActionType.Eat]: [-2, 2, 2, -2],
                [IAction_1.ActionType.Plant]: ModRegistry_1.Registry().get("doodadMycenaChlorophos")
            },
            skillUse: Enums_1.SkillType.Mycology,
            decayMax: 50000,
            decaysInto: Enums_1.ItemType.RottingVegetation,
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
            decaysInto: Enums_1.ItemType.GlassBottle,
            use: [IAction_1.ActionType.Build],
            onUse: {
                [IAction_1.ActionType.Build]: ModRegistry_1.Registry().get("doodadMycenaChlorophosLamp")
            },
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
            worth: 50,
            groups: [Enums_1.ItemTypeGroup.LightSource]
        })
    ], AddContents.prototype, "itemMycenaChlorophosLamp", void 0);
    __decorate([
        ModRegistry_1.default.item("MycenaChlorophosStreetlamp", {
            decayMax: 100000,
            decaysInto: Enums_1.ItemType.GlassBottle,
            use: [IAction_1.ActionType.Build],
            onUse: {
                [IAction_1.ActionType.Build]: ModRegistry_1.Registry().get("doodadMycenaChlorophosStreetlamp")
            },
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemMycenaChlorophosLamp"), 1, 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemType.Log, 2, 2, 2),
                    Items_1.RecipeComponent(Enums_1.ItemType.WoodenPole, 1, 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemType.String, 2, 2, 2),
                    Items_1.RecipeComponent(Enums_1.ItemType.WoodenDowels, 4, 4, 4),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Hammer, 1, 0, 0),
                ],
                skill: Enums_1.SkillType.Woodworking,
                level: Enums_1.RecipeLevel.Expert,
                reputation: 100
            },
            durability: 150,
            weight: 0.5,
            worth: 150,
            groups: [Enums_1.ItemTypeGroup.LightSource]
        })
    ], AddContents.prototype, "itemMycenaChlorophosStreetlamp", void 0);
    __decorate([
        ModRegistry_1.default.item("MycenaChlorophosIronStreetlamp", {
            decayMax: 100000,
            decaysInto: Enums_1.ItemType.GlassBottle,
            use: [IAction_1.ActionType.Build],
            onUse: {
                [IAction_1.ActionType.Build]: ModRegistry_1.Registry().get("doodadMycenaChlorophosIronStreetlamp")
            },
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemMycenaChlorophosLamp"), 1, 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemType.IronIngot, 4, 4, 4),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Hammer, 1, 0, 0),
                ],
                skill: Enums_1.SkillType.Blacksmithing,
                requiresFire: true,
                requiredDoodad: Enums_1.DoodadTypeGroup.Anvil,
                level: Enums_1.RecipeLevel.Expert,
                reputation: 100
            },
            durability: 150,
            weight: 4.5,
            worth: 150,
            groups: [Enums_1.ItemTypeGroup.LightSource]
        })
    ], AddContents.prototype, "itemMycenaChlorophosIronStreetlamp", void 0);
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
            use: [IAction_1.ActionType.Rest, IAction_1.ActionType.Sleep,],
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
            weight: 10,
            worth: 400,
        })
    ], AddContents.prototype, "itemWoodenBed", void 0);
    __decorate([
        ModRegistry_1.default.item("Pomegranate", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [1, 5, 8, 4]
            },
            returnOnUse: [ModRegistry_1.Registry().get("itemPomegranateSeeds"), true],
            dismantle: {
                items: [[ModRegistry_1.Registry().get("itemPomegranateSeeds"), 1]],
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
            use: [IAction_1.ActionType.Plant, IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [0, 1, 1, -1],
                [IAction_1.ActionType.Plant]: ModRegistry_1.Registry().get("doodadPomegranateTree")
            },
            skillUse: Enums_1.SkillType.Botany,
            disassemble: false,
            weight: 0.1,
            worth: 15,
            groups: [Enums_1.ItemTypeGroup.Seed]
        })
    ], AddContents.prototype, "itemPomegranateSeeds", void 0);
    __decorate([
        ModRegistry_1.default.item("CamelliaJaponicaFruit", {
            dismantle: {
                items: [[ModRegistry_1.Registry().get("itemCamelliaJaponicaSeeds"), 3]],
                skill: Enums_1.SkillType.Botany,
                required: Enums_1.ItemTypeGroup.Sharpened
            },
            decayMax: 10000,
            disassemble: true,
            durability: 10,
            weight: 0.2,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.Food]
        })
    ], AddContents.prototype, "itemCamelliaJaponicaFruit", void 0);
    __decorate([
        ModRegistry_1.default.item("CamelliaJaponicaSeeds", {
            use: [IAction_1.ActionType.Plant, IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [0, 1, 1, -1],
                [IAction_1.ActionType.Plant]: ModRegistry_1.Registry().get("doodadCamelliaJaponica")
            },
            skillUse: Enums_1.SkillType.Botany,
            disassemble: false,
            weight: 0.1,
            worth: 15,
            groups: [Enums_1.ItemTypeGroup.Seed]
        })
    ], AddContents.prototype, "itemCamelliaJaponicaSeeds", void 0);
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
            decayMax: 750,
            isFungi: true,
            group: Enums_1.DoodadTypeGroup.GatheredPlant,
            providesLight: -1
        })
    ], AddContents.prototype, "doodadMycenaChlorophos", void 0);
    __decorate([
        ModRegistry_1.default.doodad("MycenaChlorophosLamp", {
            pickUp: [ModRegistry_1.Registry().get("itemMycenaChlorophosLamp")],
            decayMax: 100000,
            reduceDurabilityOnGather: true,
            providesLight: 1
        })
    ], AddContents.prototype, "doodadMycenaChlorophosLamp", void 0);
    __decorate([
        ModRegistry_1.default.doodad("MycenaChlorophosStreetlamp", {
            isTall: true,
            blockMove: true,
            pickUp: [ModRegistry_1.Registry().get("itemMycenaChlorophosStreetlamp")],
            decayMax: 100000,
            reduceDurabilityOnGather: true,
            providesLight: 2
        })
    ], AddContents.prototype, "doodadMycenaChlorophosStreetlamp", void 0);
    __decorate([
        ModRegistry_1.default.doodad("MycenaChlorophosIronStreetlamp", {
            isTall: true,
            blockMove: true,
            pickUp: [ModRegistry_1.Registry().get("itemMycenaChlorophosIronStreetlamp")],
            decayMax: 100000,
            reduceDurabilityOnGather: true,
            providesLight: 2
        })
    ], AddContents.prototype, "doodadMycenaChlorophosIronStreetlamp", void 0);
    __decorate([
        ModRegistry_1.default.doodad("PomegranateTree", {
            blockLos: true,
            blockMove: true,
            isFlammable: true,
            graphicVariation: true,
            reduceDurabilityOnGather: true,
            skillUse: Enums_1.SkillType.Botany,
            gatherSkillUse: Enums_1.SkillType.Lumberjacking,
            isTall: true,
            gather: {
                [Enums_1.GrowingStage.Seedling]: [
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.PlantRoots }
                ],
                [Enums_1.GrowingStage.Vegetative]: [
                    { type: Enums_1.ItemType.Leaves },
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.PlantRoots }
                ],
                [Enums_1.GrowingStage.Budding]: [
                    { type: Enums_1.ItemType.Leaves },
                    { type: Enums_1.ItemType.Twigs },
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.TreeBark }
                ],
                [Enums_1.GrowingStage.Flowering]: [
                    { type: Enums_1.ItemType.Leaves },
                    { type: Enums_1.ItemType.Twigs },
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.TreeBark }
                ],
                [Enums_1.GrowingStage.Ripening]: [
                    { type: ModRegistry_1.Registry().get("itemPomegranate") },
                    { type: ModRegistry_1.Registry().get("itemPomegranate") },
                    { type: ModRegistry_1.Registry().get("itemPomegranate") },
                    { type: Enums_1.ItemType.Leaves },
                    { type: Enums_1.ItemType.Twigs },
                    { type: Enums_1.ItemType.Branch, chance: 5 },
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.TreeBark }
                ],
                [Enums_1.GrowingStage.Dead]: [
                    { type: Enums_1.ItemType.Log },
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.Log, chance: 50 },
                    { type: Enums_1.ItemType.Log, chance: 10 },
                    { type: Enums_1.ItemType.Log }
                ]
            },
            harvest: {
                [Enums_1.GrowingStage.Ripening]: [
                    { type: ModRegistry_1.Registry().get("itemPomegranate") },
                    { type: ModRegistry_1.Registry().get("itemPomegranate") },
                    { type: ModRegistry_1.Registry().get("itemPomegranate") }
                ]
            },
            canGrow: true,
            spawnOnTerrain: [Enums_1.TerrainType.Dirt, Enums_1.TerrainType.Grass],
            allowedTiles: [Enums_1.TerrainType.Dirt, Enums_1.TerrainType.Grass, Enums_1.TerrainType.FertileSoil],
            decayMax: 4000,
            spreadMax: 3,
            isTree: true,
            gatherCanHurtHands: true
        })
    ], AddContents.prototype, "doodadPomegranateTree", void 0);
    __decorate([
        ModRegistry_1.default.doodad("CamelliaJaponica", {
            blockLos: true,
            blockMove: true,
            isFlammable: true,
            graphicVariation: true,
            reduceDurabilityOnGather: true,
            skillUse: Enums_1.SkillType.Botany,
            gatherSkillUse: Enums_1.SkillType.Lumberjacking,
            isTall: true,
            gather: {
                [Enums_1.GrowingStage.Seedling]: [
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.PlantRoots }
                ],
                [Enums_1.GrowingStage.Vegetative]: [
                    { type: Enums_1.ItemType.Leaves },
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.PlantRoots }
                ],
                [Enums_1.GrowingStage.Budding]: [
                    { type: Enums_1.ItemType.Leaves },
                    { type: Enums_1.ItemType.Twigs },
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.TreeBark }
                ],
                [Enums_1.GrowingStage.Flowering]: [
                    { type: Enums_1.ItemType.Leaves },
                    { type: Enums_1.ItemType.Twigs },
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.TreeBark }
                ],
                [Enums_1.GrowingStage.Ripening]: [
                    { type: ModRegistry_1.Registry().get("itemCamelliaJaponicaFruit") },
                    { type: ModRegistry_1.Registry().get("itemCamelliaJaponicaFruit") },
                    { type: ModRegistry_1.Registry().get("itemCamelliaJaponicaFruit") },
                    { type: Enums_1.ItemType.Leaves },
                    { type: Enums_1.ItemType.Twigs },
                    { type: Enums_1.ItemType.Branch, chance: 5 },
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.TreeBark }
                ],
                [Enums_1.GrowingStage.Dead]: [
                    { type: Enums_1.ItemType.Log },
                    { type: Enums_1.ItemType.Branch },
                    { type: Enums_1.ItemType.Log, chance: 50 },
                    { type: Enums_1.ItemType.Log, chance: 10 },
                    { type: Enums_1.ItemType.Log }
                ]
            },
            harvest: {
                [Enums_1.GrowingStage.Ripening]: [
                    { type: ModRegistry_1.Registry().get("itemCamelliaJaponicaFruit") },
                    { type: ModRegistry_1.Registry().get("itemCamelliaJaponicaFruit") },
                    { type: ModRegistry_1.Registry().get("itemCamelliaJaponicaFruit") }
                ]
            },
            canGrow: true,
            spawnOnTerrain: [Enums_1.TerrainType.Dirt, Enums_1.TerrainType.Grass],
            allowedTiles: [Enums_1.TerrainType.Dirt, Enums_1.TerrainType.Grass, Enums_1.TerrainType.FertileSoil],
            decayMax: 4000,
            spreadMax: 3,
            isTree: true,
            gatherCanHurtHands: true
        })
    ], AddContents.prototype, "doodadCamelliaJaponica", void 0);
    __decorate([
        ModRegistry_1.default.creature("SeaCrab", {
            minhp: 2,
            maxhp: 3,
            minatk: 1,
            maxatk: 2,
            defense: new Enums_1.Defense(1, new Enums_1.Resistances(Enums_1.DamageType.Blunt, 1), new Enums_1.Vulnerabilities(Enums_1.DamageType.Slashing, 1)),
            damageType: Enums_1.DamageType.Slashing,
            ai: IEntity_1.AiType.Scared,
            moveType: Enums_1.MoveType.WetLand | Enums_1.MoveType.ShallowWater | Enums_1.MoveType.Land,
            blood: { r: 150, g: 255, b: 70 },
            spawnTiles: ICreature_1.SpawnableTiles.Wet,
            reputation: -200,
            jumpOver: true,
            tamingDifficulty: 25,
            noStumble: true,
            spawnReputation: 2e3,
            spawnGroup: [ICreature_1.SpawnGroup.FreshWater],
        }, {
            resource: [
                { item: ModRegistry_1.Registry().get("itemHardShell") },
                { item: ModRegistry_1.Registry().get("itemCrabMeat") }
            ],
            aberrantResource: [
                { item: ModRegistry_1.Registry().get("itemHardShell") },
                { item: ModRegistry_1.Registry().get("itemAberrantCrabMeat") }
            ],
            decay: 2200,
            skill: Enums_1.SkillType.Anatomy
        })
    ], AddContents.prototype, "creatureSeaCrab", void 0);
    __decorate([
        ModRegistry_1.default.creature("Snail", {
            minhp: 1,
            maxhp: 2,
            minatk: 1,
            maxatk: 1,
            defense: new Enums_1.Defense(0, new Enums_1.Resistances(Enums_1.DamageType.Blunt, 1), new Enums_1.Vulnerabilities(Enums_1.DamageType.Slashing, 1)),
            damageType: Enums_1.DamageType.True,
            ai: IEntity_1.AiType.Neutral,
            moveType: Enums_1.MoveType.WetLand | Enums_1.MoveType.ShallowWater | Enums_1.MoveType.Land,
            spawnTiles: ICreature_1.SpawnableTiles.Wet,
            blood: { r: 150, g: 255, b: 70 },
            reputation: -200,
            jumpOver: true,
            tamingDifficulty: 25,
            noStumble: true,
            acceptedItems: [Enums_1.ItemTypeGroup.WaterskinOfPotableWater, Enums_1.ItemTypeGroup.ClayJugOfPotableWater, Enums_1.ItemTypeGroup.CoconutContainerOfPotableWater, Enums_1.ItemTypeGroup.ContainerOfDesalinatedWater, Enums_1.ItemTypeGroup.ContainerOfMedicinalWater, Enums_1.ItemTypeGroup.ContainerOfPurifiedFreshWater, Enums_1.ItemTypeGroup.ContainerOfUnpurifiedFreshWater, Enums_1.ItemTypeGroup.GlassBottleOfPotableWater],
            spawnReputation: 1e3,
            spawnGroup: [ICreature_1.SpawnGroup.Any],
        }, {
            resource: [
                { item: ModRegistry_1.Registry().get("itemSnailMucus") },
                { item: ModRegistry_1.Registry().get("itemSnailMeat") },
                { item: ModRegistry_1.Registry().get("itemHardShell") }
            ],
            aberrantResource: [
                { item: ModRegistry_1.Registry().get("itemSnailMucus") },
                { item: ModRegistry_1.Registry().get("itemSnailMeat") },
                { item: ModRegistry_1.Registry().get("itemHardShell") },
                { item: ModRegistry_1.Registry().get("itemCloakCoveredWithMucus"), chance: 1 }
            ],
            decay: 2200,
            skill: Enums_1.SkillType.Anatomy
        })
    ], AddContents.prototype, "creatureSnail", void 0);
    __decorate([
        ModRegistry_1.default.creature("Nessie", {
            minhp: 75,
            maxhp: 80,
            minatk: 26,
            maxatk: 28,
            defense: new Enums_1.Defense(5, new Enums_1.Resistances(Enums_1.DamageType.Slashing, 5), new Enums_1.Vulnerabilities(Enums_1.DamageType.Fire, 2)),
            damageType: Enums_1.DamageType.Blunt,
            ai: IEntity_1.AiType.Hostile,
            moveType: Enums_1.MoveType.Land | Enums_1.MoveType.ShallowWater | Enums_1.MoveType.Water | Enums_1.MoveType.BreakDoodads,
            lootGroup: Enums_1.LootGroupType.SeaTreasure,
            loot: [{
                    item: Enums_1.ItemType.OrnateWoodenChest,
                    chance: 3
                }],
            blood: { r: 80, g: 150, b: 175 },
            aberrantBlood: { r: 220, g: 30, b: 90 },
            spawnTiles: ICreature_1.SpawnableTiles.Water,
            spawnReputation: -42e3,
            makeNoise: true,
            reputation: 350,
            tamingDifficulty: 1e3,
            spawnGroup: [ICreature_1.SpawnGroup.CaveWater, ICreature_1.SpawnGroup.Seawater, ICreature_1.SpawnGroup.StrongGuardians],
            noStumble: true,
            acceptedItems: [Enums_1.ItemType.RawCod, Enums_1.ItemType.RawBlindfish],
            skipMovementChance: 3,
            waterAnimations: true
        }, {
            resource: [
                { item: ModRegistry_1.Registry().get("itemSmoothSkin") },
                { item: Enums_1.ItemType.RawMeat },
                { item: Enums_1.ItemType.Offal },
                { item: Enums_1.ItemType.AnimalFat }
            ],
            aberrantResource: [
                { item: ModRegistry_1.Registry().get("itemSmoothSkin") },
                { item: Enums_1.ItemType.RawMeat },
                { item: Enums_1.ItemType.Offal },
                { item: Enums_1.ItemType.AnimalFat }
            ],
            decay: 12200,
            skill: Enums_1.SkillType.Anatomy
        })
    ], AddContents.prototype, "creatureNessie", void 0);
    __decorate([
        ModRegistry_1.default.terrain("MudFlat", {
            tillable: true,
            passable: true,
            particles: { r: 171, g: 176, b: 179 },
            resources: [
                { type: ModRegistry_1.Registry().get("itemPearlOyster"), chance: 2 },
                { type: ModRegistry_1.Registry().get("itemScallop"), chance: 5 },
                { type: ModRegistry_1.Registry().get("itemMud"), chance: 30, tileChange: Enums_1.TerrainType.Dirt },
            ]
        })
    ], AddContents.prototype, "terrainMudFlat", void 0);
    __decorate([
        IHookHost_1.HookMethod
    ], AddContents.prototype, "onBuild", null);
    __decorate([
        IHookHost_1.HookMethod
    ], AddContents.prototype, "onPickupDoodad", null);
    exports.default = AddContents;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ29udGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hZGRDb250ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFxQkEsTUFBcUIsV0FBWSxTQUFRLGFBQUc7UUFBNUM7O1lBZzBCUSxhQUFRLEdBQWlCLEVBQUUsQ0FBQztRQXNCcEMsQ0FBQztRQXBCTyxPQUFPLENBQUMsS0FBWSxFQUFFLElBQVcsRUFBRSxJQUFXLEVBQUUsTUFBZTtZQUNyRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3JCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDM0IsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUV6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHO2dCQUN6QixVQUFVLEVBQUcsUUFBUTtnQkFDckIsUUFBUSxFQUFHLE1BQU07YUFDakIsQ0FBQztZQUNGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFHTSxjQUFjLENBQUMsTUFBZSxFQUFFLE1BQWU7WUFDckQsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNuQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVsQyxDQUFDO1FBQUEsQ0FBQztLQUNGO0lBdDBCQTtRQVRDLHFCQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixLQUFLLEVBQUcsaUJBQVMsQ0FBQyxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLGVBQU8sQ0FBQyxDQUFDLEVBQUMsSUFBSSxtQkFBVyxD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