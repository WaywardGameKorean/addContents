var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "action/Action", "Enums", "action/IAction", "entity/IEntity", "item/Items", "creature/ICreature", "mod/Mod", "mod/ModRegistry", "mod/IHookHost", "utilities/Random"], function (require, exports, Action_1, Enums_1, IAction_1, IEntity_1, Items_1, ICreature_1, Mod_1, ModRegistry_1, IHookHost_1, Random_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Addcontents extends Mod_1.default {
        constructor() {
            super(...arguments);
            this.firstLoad = true;
        }
        initializeSaveData(data) {
            if (data) {
                this.firstLoad = false;
                return data;
            }
            this.firstLoad = true;
            return {
                seed: new Date().getTime()
            };
        }
        onCreateWorld(world) {
        }
        preLoadWorldDifferences(generateNewWorld) {
            Random_1.default.generator.setSeed(this.data.seed);
        }
        onBuild(human, item, tile, doodad) {
            if (item.decay !== undefined) {
                doodad.decay = item.decay;
            }
        }
        onPickupDoodad(player, doodad) {
            if (doodad.decay !== undefined) {
                game.items[this.itemData].decay = doodad.decay;
            }
        }
        ;
        onInventoryItemAdd(player, item, container) {
            if (item.decay !== undefined) {
                let id = item.id;
                this.itemData = id;
            }
        }
        ;
    }
    __decorate([
        ModRegistry_1.default.action("LightUp", new Action_1.Action(IAction_1.ActionArgument.ItemInventory)
            .setUsableBy(IEntity_1.EntityType.Player)
            .setHandler((action, item) => {
            let player = action.executor;
            console.log(player, item);
            console.log(itemManager.getItemInInventoryByGroup(player, Enums_1.ItemTypeGroup.Fuel, Enums_1.ItemType.Log));
        }))
    ], Addcontents.prototype, "actionLightUp", void 0);
    __decorate([
        ModRegistry_1.default.action("AddOil", new Action_1.Action(IAction_1.ActionArgument.ItemInventory)
            .setUsableBy(IEntity_1.EntityType.Player)
            .setHandler((action, item) => {
            console.log(action.executor, item);
        }))
    ], Addcontents.prototype, "actionAddOil", void 0);
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
    ], Addcontents.prototype, "itemRabbitRobe", void 0);
    __decorate([
        ModRegistry_1.default.item("CloakCoveredWithMucus", {
            equip: Enums_1.EquipType.Back,
            defense: new Enums_1.Defense(4, new Enums_1.Resistances(Enums_1.DamageType.Fire, 2, Enums_1.DamageType.Slashing, 2), new Enums_1.Vulnerabilities(Enums_1.DamageType.Piercing, 1)),
            durability: 120,
            weight: 1.2,
            worth: 200
        })
    ], Addcontents.prototype, "itemCloakCoveredWithMucus", void 0);
    __decorate([
        ModRegistry_1.default.item("HardShell", {
            disassemble: false,
            durability: 10,
            weight: 0.5,
            worth: 5,
            groups: [Enums_1.ItemTypeGroup.Other]
        })
    ], Addcontents.prototype, "itemHardShell", void 0);
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
    ], Addcontents.prototype, "itemHardShellPowder", void 0);
    __decorate([
        ModRegistry_1.default.item("SmoothSkin", {
            skillUse: Enums_1.SkillType.Anatomy,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 200
        })
    ], Addcontents.prototype, "itemSmoothSkin", void 0);
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
    ], Addcontents.prototype, "itemCrabMeat", void 0);
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
    ], Addcontents.prototype, "itemCookedCrabMeat", void 0);
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
    ], Addcontents.prototype, "itemAberrantCrabMeat", void 0);
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
    ], Addcontents.prototype, "itemCookedAberrantCrabMeat", void 0);
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
    ], Addcontents.prototype, "itemMud", void 0);
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
    ], Addcontents.prototype, "itemPearlOyster", void 0);
    __decorate([
        ModRegistry_1.default.item("Pearl", {
            disassemble: false,
            durability: 10,
            weight: 0.8,
            worth: 1000,
        })
    ], Addcontents.prototype, "itemPearl", void 0);
    __decorate([
        ModRegistry_1.default.item("SnailMucus", {
            decayMax: 2000,
            disassemble: false,
            durability: 10,
            weight: 0.2,
            worth: 5
        })
    ], Addcontents.prototype, "itemSnailMucus", void 0);
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
    ], Addcontents.prototype, "itemSnailSalveBand", void 0);
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
    ], Addcontents.prototype, "itemSnailMeat", void 0);
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
    ], Addcontents.prototype, "itemCookedSnailMeat", void 0);
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
    ], Addcontents.prototype, "itemScallop", void 0);
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
    ], Addcontents.prototype, "itemCookedScallop", void 0);
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
    ], Addcontents.prototype, "itemMycenaChlorophos", void 0);
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
    ], Addcontents.prototype, "itemMycenaChlorophosLamp", void 0);
    __decorate([
        ModRegistry_1.default.item("MycenaChlorophosStreetlamp", {
            decayMax: 100000,
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
    ], Addcontents.prototype, "itemMycenaChlorophosStreetlamp", void 0);
    __decorate([
        ModRegistry_1.default.item("MycenaChlorophosIronStreetlamp", {
            decayMax: 100000,
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
    ], Addcontents.prototype, "itemMycenaChlorophosIronStreetlamp", void 0);
    __decorate([
        ModRegistry_1.default.item("StoneCompressionMachine", {
            use: [IAction_1.ActionType.Build],
            onUse: {
                [IAction_1.ActionType.Build]: ModRegistry_1.Registry().get("doodadStoneCompressionMachine")
            },
            recipe: {
                components: [
                    Items_1.RecipeComponent(Enums_1.ItemType.LargeRock, 3, 3, 3),
                    Items_1.RecipeComponent(Enums_1.ItemType.Log, 4, 4, 4),
                    Items_1.RecipeComponent(Enums_1.ItemType.WoodenDowels, 4, 4, 4),
                    Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Hammer, 1, 0, 0),
                ],
                skill: Enums_1.SkillType.Stonecrafting,
                level: Enums_1.RecipeLevel.Intermediate,
                reputation: 100
            },
            durability: 150,
            weight: 5,
            worth: 50,
            groups: [Enums_1.ItemTypeGroup.Tool]
        })
    ], Addcontents.prototype, "itemStoneCompressionMachine", void 0);
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
    ], Addcontents.prototype, "itemPillow", void 0);
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
            weight: 10,
            worth: 400,
            doodad: {
                isFlammable: true,
                repairItem: ModRegistry_1.Registry().get("itemWoodenBed"),
                reduceDurabilityOnGather: true
            }
        })
    ], Addcontents.prototype, "itemWoodenBed", void 0);
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
    ], Addcontents.prototype, "itemPomegranate", void 0);
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
    ], Addcontents.prototype, "itemPomegranateSeeds", void 0);
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
    ], Addcontents.prototype, "itemCamelliaJaponicaFruit", void 0);
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
    ], Addcontents.prototype, "itemCamelliaJaponicaSeeds", void 0);
    __decorate([
        ModRegistry_1.default.item("ClayJugOfCamelliaJaponicaOil", {
            use: [ModRegistry_1.Registry().get("actionAddOil")],
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemCamelliaJaponicaSeeds"), 10, 10, 10),
                    Items_1.RecipeComponent(Enums_1.ItemType.ClayJug, 1, 1, 1),
                ],
                skill: Enums_1.SkillType.Tinkering,
                requiredDoodad: ModRegistry_1.Registry().get("doodadStoneCompressionMachine"),
                level: Enums_1.RecipeLevel.Simple,
                reputation: -100
            },
            disassemble: false,
            weight: 1,
            worth: 100,
            groups: [Enums_1.ItemTypeGroup.Fuel]
        })
    ], Addcontents.prototype, "itemClayJugOfCamelliaJaponicaOil", void 0);
    __decorate([
        ModRegistry_1.default.item("GlassBottleOfCamelliaJaponicaOil", {
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemCamelliaJaponicaSeeds"), 10, 10, 10),
                    Items_1.RecipeComponent(Enums_1.ItemType.GlassBottle, 1, 1, 1),
                ],
                skill: Enums_1.SkillType.Tinkering,
                requiredDoodad: ModRegistry_1.Registry().get("doodadStoneCompressionMachine"),
                level: Enums_1.RecipeLevel.Simple,
                reputation: -100
            },
            disassemble: false,
            weight: 1,
            worth: 100,
            groups: [Enums_1.ItemTypeGroup.Fuel]
        })
    ], Addcontents.prototype, "itemGlassBottleOfCamelliaJaponicaOil", void 0);
    __decorate([
        ModRegistry_1.default.item("Ice", {
            use: [IAction_1.ActionType.Eat],
            onUse: {
                [IAction_1.ActionType.Eat]: [1, -1, 0, 5],
            },
            disassemble: false,
            weight: 0.3,
            worth: 100,
            groups: [Enums_1.ItemTypeGroup.Food]
        })
    ], Addcontents.prototype, "itemIce", void 0);
    __decorate([
        ModRegistry_1.default.item("Lantern", {
            attack: 1,
            damageType: Enums_1.DamageType.Blunt,
            decaysInto: Enums_1.ItemType.GlassBottle,
            use: [ModRegistry_1.Registry().get("actionLightUp"), IAction_1.ActionType.Build],
            onUse: {
                [IAction_1.ActionType.Build]: ModRegistry_1.Registry().get("doodadLantern")
            },
            equip: Enums_1.EquipType.Held,
            recipe: {
                components: [
                    Items_1.RecipeComponent(Enums_1.ItemType.IronIngot, 3, 3, 3),
                    Items_1.RecipeComponent(Enums_1.ItemType.SheetOfGlass, 1, 1, 1),
                    Items_1.RecipeComponent(Enums_1.ItemType.String, 2, 2, 2)
                ],
                requiresFire: true,
                requiredDoodad: Enums_1.DoodadTypeGroup.Anvil,
                skill: Enums_1.SkillType.Blacksmithing,
                level: Enums_1.RecipeLevel.Intermediate,
                reputation: -50
            },
            durability: 50,
            weight: 0.8,
            worth: 50,
            groups: [Enums_1.ItemTypeGroup.LightSource]
        })
    ], Addcontents.prototype, "itemLantern", void 0);
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
    ], Addcontents.prototype, "doodadMycenaChlorophos", void 0);
    __decorate([
        ModRegistry_1.default.doodad("MycenaChlorophosLamp", {
            pickUp: [ModRegistry_1.Registry().get("itemMycenaChlorophosLamp")],
            decayMax: 100000,
            reduceDurabilityOnGather: true,
            providesLight: 1
        })
    ], Addcontents.prototype, "doodadMycenaChlorophosLamp", void 0);
    __decorate([
        ModRegistry_1.default.doodad("MycenaChlorophosStreetlamp", {
            isTall: true,
            blockMove: true,
            pickUp: [ModRegistry_1.Registry().get("itemMycenaChlorophosStreetlamp")],
            decayMax: 100000,
            reduceDurabilityOnGather: true,
            providesLight: 2
        })
    ], Addcontents.prototype, "doodadMycenaChlorophosStreetlamp", void 0);
    __decorate([
        ModRegistry_1.default.doodad("MycenaChlorophosIronStreetlamp", {
            isTall: true,
            blockMove: true,
            pickUp: [ModRegistry_1.Registry().get("itemMycenaChlorophosIronStreetlamp")],
            decayMax: 100000,
            reduceDurabilityOnGather: true,
            providesLight: 2
        })
    ], Addcontents.prototype, "doodadMycenaChlorophosIronStreetlamp", void 0);
    __decorate([
        ModRegistry_1.default.doodad("Lantern", {
            pickUp: [ModRegistry_1.Registry().get("itemLantern")],
            reduceDurabilityOnGather: true
        })
    ], Addcontents.prototype, "doodadLantern", void 0);
    __decorate([
        ModRegistry_1.default.doodad("StoneCompressionMachine", {
            isTall: true,
            blockMove: true,
            pickUp: [ModRegistry_1.Registry().get("itemStoneCompressionMachine")],
            reduceDurabilityOnGather: true
        })
    ], Addcontents.prototype, "doodadStoneCompressionMachine", void 0);
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
    ], Addcontents.prototype, "doodadPomegranateTree", void 0);
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
    ], Addcontents.prototype, "doodadCamelliaJaponica", void 0);
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
    ], Addcontents.prototype, "creatureSeaCrab", void 0);
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
    ], Addcontents.prototype, "creatureSnail", void 0);
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
                { item: ModRegistry_1.Registry().get("itemRabbitRobe"), chance: 1 },
                { item: Enums_1.ItemType.RawMeat },
                { item: Enums_1.ItemType.Offal },
                { item: Enums_1.ItemType.AnimalFat }
            ],
            aberrantResource: [
                { item: ModRegistry_1.Registry().get("itemSmoothSkin") },
                { item: ModRegistry_1.Registry().get("itemRabbitRobe"), chance: 1 },
                { item: Enums_1.ItemType.RawMeat },
                { item: Enums_1.ItemType.Offal },
                { item: Enums_1.ItemType.AnimalFat }
            ],
            decay: 12200,
            skill: Enums_1.SkillType.Anatomy
        })
    ], Addcontents.prototype, "creatureNessie", void 0);
    __decorate([
        ModRegistry_1.default.creature("IceElemental", {
            minhp: 15,
            maxhp: 19,
            minatk: 14,
            maxatk: 21,
            defense: new Enums_1.Defense(5, new Enums_1.Resistances(Enums_1.DamageType.Blunt, 50), new Enums_1.Vulnerabilities(Enums_1.DamageType.Fire, 10)),
            damageType: Enums_1.DamageType.Blunt,
            ai: IEntity_1.AiType.Hostile,
            moveType: Enums_1.MoveType.Flying,
            lootGroup: Enums_1.LootGroupType.FireElemental,
            spawnTiles: ICreature_1.SpawnableTiles.All,
            spawnReputation: -3e4,
            makeNoise: true,
            reputation: 250,
            tamingDifficulty: 300,
            spawnGroup: [ICreature_1.SpawnGroup.Guardians, ICreature_1.SpawnGroup.StrongGuardians],
            noStumble: true,
            acceptedItems: [ModRegistry_1.Registry().get("itemIce")],
            skipMovementChance: 5,
            tileMissChance: {
                [ICreature_1.TileGroup.Wet]: 0.5
            }
        }, {
            resource: [
                { item: ModRegistry_1.Registry().get("itemIce") },
                { item: ModRegistry_1.Registry().get("itemRabbitRobe"), chance: 1 }
            ],
            aberrantResource: [
                { item: ModRegistry_1.Registry().get("itemIce") },
                { item: ModRegistry_1.Registry().get("itemRabbitRobe"), chance: 1 }
            ],
            decay: 12200,
            skill: Enums_1.SkillType.Anatomy,
            animated: true
        })
    ], Addcontents.prototype, "creatureIceElemental", void 0);
    __decorate([
        ModRegistry_1.default.creature("SnowMan", {
            minhp: 15,
            maxhp: 19,
            minatk: 14,
            maxatk: 21,
            defense: new Enums_1.Defense(5, new Enums_1.Resistances(), new Enums_1.Vulnerabilities(Enums_1.DamageType.Slashing, 50)),
            damageType: Enums_1.DamageType.Blunt,
            ai: IEntity_1.AiType.Hostile,
            moveType: Enums_1.MoveType.Land,
            lootGroup: Enums_1.LootGroupType.FireElemental,
            spawnTiles: ICreature_1.SpawnableTiles.All,
            spawnReputation: -3e4,
            makeNoise: true,
            reputation: 250,
            tamingDifficulty: 300,
            spawnGroup: [ICreature_1.SpawnGroup.Guardians, ICreature_1.SpawnGroup.StrongGuardians],
            noStumble: true,
            acceptedItems: [Enums_1.ItemType.PileOfSnow],
            skipMovementChance: 5,
            tileMissChance: {
                [ICreature_1.TileGroup.Wet]: 0.5
            }
        }, {
            resource: [
                { item: Enums_1.ItemType.PileOfSnow },
                { item: Enums_1.ItemType.Branch },
                { item: Enums_1.ItemType.Carrot }
            ],
            aberrantResource: [
                { item: Enums_1.ItemType.PileOfSnow },
                { item: Enums_1.ItemType.Branch },
                { item: Enums_1.ItemType.Carrot }
            ],
            decay: 12200,
            skill: Enums_1.SkillType.Anatomy
        })
    ], Addcontents.prototype, "creatureSnowMan", void 0);
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
    ], Addcontents.prototype, "terrainMudFlat", void 0);
    __decorate([
        Mod_1.default.saveData("Addcontents")
    ], Addcontents.prototype, "data", void 0);
    __decorate([
        IHookHost_1.HookMethod
    ], Addcontents.prototype, "onCreateWorld", null);
    __decorate([
        IHookHost_1.HookMethod
    ], Addcontents.prototype, "preLoadWorldDifferences", null);
    __decorate([
        IHookHost_1.HookMethod
    ], Addcontents.prototype, "onBuild", null);
    __decorate([
        IHookHost_1.HookMethod
    ], Addcontents.prototype, "onPickupDoodad", null);
    __decorate([
        IHookHost_1.HookMethod
    ], Addcontents.prototype, "onInventoryItemAdd", null);
    __decorate([
        Mod_1.default.instance("Addcontents")
    ], Addcontents, "INSTANCE", void 0);
    exports.default = Addcontents;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkY29udGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hZGRjb250ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFvQkEsTUFBcUIsV0FBWSxTQUFRLGFBQUc7UUFBNUM7O1lBcWdDUSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBaUR6QixDQUFDO1FBL0NPLGtCQUFrQixDQUFDLElBQXVCO1lBQ2hELElBQUksSUFBSSxFQUFFO2dCQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixPQUFPLElBQUksQ0FBQzthQUNaO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsT0FBTztnQkFDTixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7YUFDMUIsQ0FBQztRQUNILENBQUM7UUFNTSxhQUFhLENBQUMsS0FBYTtRQUVsQyxDQUFDO1FBR00sdUJBQXVCLENBQUMsZ0JBQXlCO1lBQ3ZELGdCQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFJTSxPQUFPLENBQUMsS0FBWSxFQUFFLElBQVcsRUFBRSxJQUFXLEVBQUUsTUFBZTtZQUNyRSxJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFDO2dCQUMzQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDMUI7UUFDRixDQUFDO1FBR00sY0FBYyxDQUFDLE1BQWUsRUFBRSxNQUFlO1lBQ3JELElBQUcsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQy9DO1FBQ0YsQ0FBQztRQUFBLENBQUM7UUFHSyxrQkFBa0IsQ0FBQyxN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