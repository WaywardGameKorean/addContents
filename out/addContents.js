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
            group: Enums_1.DoodadTypeGroup.GatheredPlant
        })
    ], AddContents.prototype, "doodadMycenaChlorophos", void 0);
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
            acceptedItems: [Enums_1.ItemTypeGroup.Treasure],
            skipMovementChance: 3,
            waterAnimations: true
        }, {
            resource: [],
            aberrantResource: [],
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
    exports.default = AddContents;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ29udGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hZGRDb250ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFZQSxNQUFxQixXQUFZLFNBQVEsYUFBRztLQXluQjNDO0lBem1CQTtRQVRDLHFCQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixLQUFLLEVBQUcsaUJBQVMsQ0FBQyxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLGVBQU8sQ0FBQyxDQUFDLEVBQUMsSUFBSSxtQkFBVyxDQUFDLGtCQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLHVCQUFlLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEksWUFBWSxFQUFHLElBQUk7WUFDbkIsVUFBVSxFQUFHLElBQUk7WUFDakIsVUFBVSxFQUFFLEdBQUc7WUFDZixNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRyxHQUFHO1NBQ1gsQ0FBQzt1REFDOEI7SUFTaEM7UUFQQyxxQkFBUSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUN2QyxLQUFLLEVBQUcsaUJBQVMsQ0FBQyxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLGVBQU8sQ0FBQyxDQUFDLEVBQUMsSUFBSSxtQkFBVyxDQUFDLGtCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLHVCQUFlLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0gsVUFBVSxFQUFFLEdBQUc7WUFDZixNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRyxHQUFHO1NBQ1gsQ0FBQztrRUFDeUM7SUFTM0M7UUFQQyxxQkFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDM0Is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