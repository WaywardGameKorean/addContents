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
            weight: 10,
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
        ModRegistry_1.default.terrain("MudFlat", {
            tillable: true,
            passable: true,
            particles: { r: 171, g: 176, b: 179 },
            resources: [
                { type: ModRegistry_1.Registry().get("itemPearlOyster"), chance: 2 },
                { type: ModRegistry_1.Registry().get("itemScallop"), chance: 5 },
                { type: ModRegistry_1.Registry().get("itemMud"), chance: 60 },
            ]
        })
    ], AddContents.prototype, "terrainMudFlat", void 0);
    exports.default = AddContents;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ29udGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hZGRDb250ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFZQSxNQUFxQixXQUFZLFNBQVEsYUFBRztLQTZrQjNDO0lBN2pCQTtRQVRDLHFCQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixLQUFLLEVBQUcsaUJBQVMsQ0FBQyxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLGVBQU8sQ0FBQyxDQUFDLEVBQUMsSUFBSSxtQkFBVyxDQUFDLGtCQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLHVCQUFlLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEksWUFBWSxFQUFHLElBQUk7WUFDbkIsVUFBVSxFQUFHLElBQUk7WUFDakIsVUFBVSxFQUFFLEdBQUc7WUFDZixNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRyxHQUFHO1NBQ1gsQ0FBQzt1REFDOEI7SUFTaEM7UUFQQyxxQkFBUSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUN2QyxLQUFLLEVBQUcsaUJBQVMsQ0FBQyxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLGVBQU8sQ0FBQyxDQUFDLEVBQUMsSUFBSSxtQkFBVyxDQUFDLGtCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLHVCQUFlLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0gsVUFBVSxFQUFFLEdBQUc7WUFDZixNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRyxHQUFHO1NBQ1gsQ0FBQztrRUFDeUM7SUFTM0M7UUFQQyxxQkFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDM0Is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