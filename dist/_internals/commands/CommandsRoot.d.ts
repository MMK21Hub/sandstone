import type { LiteralUnion } from '@/generalTypes';
import type { BIOMES, GAMEMODES, GAMERULES, ITEMS, JsonTextComponent, SelectorArgument, STRUCTURES } from '@arguments';
import Datapack from '@datapack/Datapack';
import type { SaveOptions } from '@datapack/filesystem';
import type { CommandArgs } from '@datapack/minecraft';
import { Selector } from '@variables';
import { Advancement, Bossbar, Data, DatapackCommand, Debug, Effect, Execute, Experience, Forceload, Loot, Scoreboard } from './implementations';
export declare class CommandsRoot {
    Datapack: Datapack;
    inExecute: boolean;
    executable: boolean;
    arguments: CommandArgs;
    commandsRoot: CommandsRoot;
    constructor(datapack: Datapack);
    /**
     * Registers the current command.
     *
     * @param soft If true, then it allows to try to register a command when we don't know if it is needed.
     * Sometimes, is is possible a command needs to be registered, or maybe it's not. Then a soft register is necessary.
     */
    register: (soft?: boolean) => void;
    reset(): void;
    /** UTILS */
    createObjective: (name: string, criterion: string, display?: string | number | boolean | readonly (string | number | boolean | ({
        text: string | number | boolean;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        translate: string;
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        score: {
            name: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false>;
            objective: string;
            value?: number | undefined;
        };
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        selector: string;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        keybind: string;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        nbt: string;
        interpret?: boolean | undefined;
    } & {
        block: string | import("../variables").VectorClass<[string, string, string]>;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        nbt: string;
        interpret?: boolean | undefined;
    } & {
        entity: string;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        nbt: string;
        interpret?: boolean | undefined;
    } & {
        storage: string;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | import("../arguments").ComponentClass)[] | ({
        text: string | number | boolean;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        translate: string;
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        score: {
            name: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false>;
            objective: string;
            value?: number | undefined;
        };
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        selector: string;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        keybind: string;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        nbt: string;
        interpret?: boolean | undefined;
    } & {
        block: string | import("../variables").VectorClass<[string, string, string]>;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        nbt: string;
        interpret?: boolean | undefined;
    } & {
        entity: string;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | ({
        nbt: string;
        interpret?: boolean | undefined;
    } & {
        storage: string;
    } & {
        with?: import("../arguments").TextComponentObject[] | undefined;
    } & {
        color?: (string & {}) | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "reset" | undefined;
        font?: string | undefined;
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        underlined?: boolean | undefined;
        strikethrough?: boolean | undefined;
        obfuscated?: boolean | undefined;
    } & {
        insertion?: string | undefined;
        clickEvent?: {
            action: LiteralUnion<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard", string>;
            value: string;
        } | undefined;
        hoverEvent?: {
            action: "show_text";
            contents: JsonTextComponent;
        } | {
            action: "show_item";
            contents: {
                id: string;
                count?: number | undefined;
                tag?: string | undefined;
            };
        } | {
            action: "show_entity";
            contents: {
                name?: string | undefined;
                type: string;
                id: string;
            };
        } | undefined;
    }) | import("../arguments").ComponentClass | undefined) => import("../variables").ObjectiveClass;
    Selector: typeof Selector;
    /**
     * Saves the datapack to the file system.
     *
     * @param name The name of the Datapack
     *
     * @param options The save options
     */
    save: (name: string, options?: SaveOptions | undefined) => void;
    /** COMMANDS */
    advancement: Advancement;
    attribute: (target: string | import("../variables").SelectorClass<true>, attribute: string) => import("./implementations").AttributeOperation;
    bossbar: Bossbar;
    clear: (targets?: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false> | undefined, item?: "minecraft:armor_stand" | "minecraft:arrow" | "minecraft:chicken" | "minecraft:cod" | "minecraft:end_crystal" | "minecraft:firework_rocket" | "minecraft:item_frame" | "minecraft:minecart" | "minecraft:chest_minecart" | "minecraft:command_block_minecart" | "minecraft:furnace_minecart" | "minecraft:hopper_minecart" | "minecraft:tnt_minecart" | "minecraft:painting" | "minecraft:tnt" | "minecraft:pufferfish" | "minecraft:rabbit" | "minecraft:salmon" | "minecraft:snowball" | "minecraft:spectral_arrow" | "minecraft:egg" | "minecraft:ender_pearl" | "minecraft:experience_bottle" | "minecraft:potion" | "minecraft:trident" | "minecraft:tropical_fish" | (string & {}) | "minecraft:air" | "minecraft:stone" | "minecraft:granite" | "minecraft:polished_granite" | "minecraft:diorite" | "minecraft:polished_diorite" | "minecraft:andesite" | "minecraft:polished_andesite" | "minecraft:grass_block" | "minecraft:dirt" | "minecraft:coarse_dirt" | "minecraft:podzol" | "minecraft:cobblestone" | "minecraft:oak_planks" | "minecraft:spruce_planks" | "minecraft:birch_planks" | "minecraft:jungle_planks" | "minecraft:acacia_planks" | "minecraft:dark_oak_planks" | "minecraft:oak_sapling" | "minecraft:spruce_sapling" | "minecraft:birch_sapling" | "minecraft:jungle_sapling" | "minecraft:acacia_sapling" | "minecraft:dark_oak_sapling" | "minecraft:bedrock" | "minecraft:sand" | "minecraft:red_sand" | "minecraft:gravel" | "minecraft:gold_ore" | "minecraft:iron_ore" | "minecraft:coal_ore" | "minecraft:nether_gold_ore" | "minecraft:oak_log" | "minecraft:spruce_log" | "minecraft:birch_log" | "minecraft:jungle_log" | "minecraft:acacia_log" | "minecraft:dark_oak_log" | "minecraft:stripped_spruce_log" | "minecraft:stripped_birch_log" | "minecraft:stripped_jungle_log" | "minecraft:stripped_acacia_log" | "minecraft:stripped_dark_oak_log" | "minecraft:stripped_oak_log" | "minecraft:oak_wood" | "minecraft:spruce_wood" | "minecraft:birch_wood" | "minecraft:jungle_wood" | "minecraft:acacia_wood" | "minecraft:dark_oak_wood" | "minecraft:stripped_oak_wood" | "minecraft:stripped_spruce_wood" | "minecraft:stripped_birch_wood" | "minecraft:stripped_jungle_wood" | "minecraft:stripped_acacia_wood" | "minecraft:stripped_dark_oak_wood" | "minecraft:oak_leaves" | "minecraft:spruce_leaves" | "minecraft:birch_leaves" | "minecraft:jungle_leaves" | "minecraft:acacia_leaves" | "minecraft:dark_oak_leaves" | "minecraft:sponge" | "minecraft:wet_sponge" | "minecraft:glass" | "minecraft:lapis_ore" | "minecraft:lapis_block" | "minecraft:dispenser" | "minecraft:sandstone" | "minecraft:chiseled_sandstone" | "minecraft:cut_sandstone" | "minecraft:note_block" | "minecraft:white_bed" | "minecraft:orange_bed" | "minecraft:magenta_bed" | "minecraft:light_blue_bed" | "minecraft:yellow_bed" | "minecraft:lime_bed" | "minecraft:pink_bed" | "minecraft:gray_bed" | "minecraft:light_gray_bed" | "minecraft:cyan_bed" | "minecraft:purple_bed" | "minecraft:blue_bed" | "minecraft:brown_bed" | "minecraft:green_bed" | "minecraft:red_bed" | "minecraft:black_bed" | "minecraft:powered_rail" | "minecraft:detector_rail" | "minecraft:sticky_piston" | "minecraft:cobweb" | "minecraft:grass" | "minecraft:fern" | "minecraft:dead_bush" | "minecraft:seagrass" | "minecraft:piston" | "minecraft:white_wool" | "minecraft:orange_wool" | "minecraft:magenta_wool" | "minecraft:light_blue_wool" | "minecraft:yellow_wool" | "minecraft:lime_wool" | "minecraft:pink_wool" | "minecraft:gray_wool" | "minecraft:light_gray_wool" | "minecraft:cyan_wool" | "minecraft:purple_wool" | "minecraft:blue_wool" | "minecraft:brown_wool" | "minecraft:green_wool" | "minecraft:red_wool" | "minecraft:black_wool" | "minecraft:dandelion" | "minecraft:poppy" | "minecraft:blue_orchid" | "minecraft:allium" | "minecraft:azure_bluet" | "minecraft:red_tulip" | "minecraft:orange_tulip" | "minecraft:white_tulip" | "minecraft:pink_tulip" | "minecraft:oxeye_daisy" | "minecraft:cornflower" | "minecraft:wither_rose" | "minecraft:lily_of_the_valley" | "minecraft:brown_mushroom" | "minecraft:red_mushroom" | "minecraft:gold_block" | "minecraft:iron_block" | "minecraft:bricks" | "minecraft:bookshelf" | "minecraft:mossy_cobblestone" | "minecraft:obsidian" | "minecraft:torch" | "minecraft:spawner" | "minecraft:oak_stairs" | "minecraft:chest" | "minecraft:diamond_ore" | "minecraft:diamond_block" | "minecraft:crafting_table" | "minecraft:wheat" | "minecraft:farmland" | "minecraft:furnace" | "minecraft:oak_sign" | "minecraft:spruce_sign" | "minecraft:birch_sign" | "minecraft:acacia_sign" | "minecraft:jungle_sign" | "minecraft:dark_oak_sign" | "minecraft:oak_door" | "minecraft:ladder" | "minecraft:rail" | "minecraft:cobblestone_stairs" | "minecraft:lever" | "minecraft:stone_pressure_plate" | "minecraft:iron_door" | "minecraft:oak_pressure_plate" | "minecraft:spruce_pressure_plate" | "minecraft:birch_pressure_plate" | "minecraft:jungle_pressure_plate" | "minecraft:acacia_pressure_plate" | "minecraft:dark_oak_pressure_plate" | "minecraft:redstone_ore" | "minecraft:redstone_torch" | "minecraft:stone_button" | "minecraft:snow" | "minecraft:ice" | "minecraft:snow_block" | "minecraft:cactus" | "minecraft:clay" | "minecraft:sugar_cane" | "minecraft:jukebox" | "minecraft:oak_fence" | "minecraft:pumpkin" | "minecraft:netherrack" | "minecraft:soul_sand" | "minecraft:soul_soil" | "minecraft:basalt" | "minecraft:polished_basalt" | "minecraft:soul_torch" | "minecraft:glowstone" | "minecraft:carved_pumpkin" | "minecraft:jack_o_lantern" | "minecraft:cake" | "minecraft:repeater" | "minecraft:white_stained_glass" | "minecraft:orange_stained_glass" | "minecraft:magenta_stained_glass" | "minecraft:light_blue_stained_glass" | "minecraft:yellow_stained_glass" | "minecraft:lime_stained_glass" | "minecraft:pink_stained_glass" | "minecraft:gray_stained_glass" | "minecraft:light_gray_stained_glass" | "minecraft:cyan_stained_glass" | "minecraft:purple_stained_glass" | "minecraft:blue_stained_glass" | "minecraft:brown_stained_glass" | "minecraft:green_stained_glass" | "minecraft:red_stained_glass" | "minecraft:black_stained_glass" | "minecraft:oak_trapdoor" | "minecraft:spruce_trapdoor" | "minecraft:birch_trapdoor" | "minecraft:jungle_trapdoor" | "minecraft:acacia_trapdoor" | "minecraft:dark_oak_trapdoor" | "minecraft:stone_bricks" | "minecraft:mossy_stone_bricks" | "minecraft:cracked_stone_bricks" | "minecraft:chiseled_stone_bricks" | "minecraft:infested_stone" | "minecraft:infested_cobblestone" | "minecraft:infested_stone_bricks" | "minecraft:infested_mossy_stone_bricks" | "minecraft:infested_cracked_stone_bricks" | "minecraft:infested_chiseled_stone_bricks" | "minecraft:brown_mushroom_block" | "minecraft:red_mushroom_block" | "minecraft:mushroom_stem" | "minecraft:iron_bars" | "minecraft:chain" | "minecraft:glass_pane" | "minecraft:melon" | "minecraft:vine" | "minecraft:oak_fence_gate" | "minecraft:brick_stairs" | "minecraft:stone_brick_stairs" | "minecraft:mycelium" | "minecraft:lily_pad" | "minecraft:nether_bricks" | "minecraft:nether_brick_fence" | "minecraft:nether_brick_stairs" | "minecraft:nether_wart" | "minecraft:enchanting_table" | "minecraft:brewing_stand" | "minecraft:cauldron" | "minecraft:end_portal_frame" | "minecraft:end_stone" | "minecraft:dragon_egg" | "minecraft:redstone_lamp" | "minecraft:sandstone_stairs" | "minecraft:emerald_ore" | "minecraft:ender_chest" | "minecraft:tripwire_hook" | "minecraft:emerald_block" | "minecraft:spruce_stairs" | "minecraft:birch_stairs" | "minecraft:jungle_stairs" | "minecraft:command_block" | "minecraft:beacon" | "minecraft:cobblestone_wall" | "minecraft:mossy_cobblestone_wall" | "minecraft:flower_pot" | "minecraft:oak_button" | "minecraft:spruce_button" | "minecraft:birch_button" | "minecraft:jungle_button" | "minecraft:acacia_button" | "minecraft:dark_oak_button" | "minecraft:skeleton_skull" | "minecraft:wither_skeleton_skull" | "minecraft:zombie_head" | "minecraft:player_head" | "minecraft:creeper_head" | "minecraft:dragon_head" | "minecraft:anvil" | "minecraft:chipped_anvil" | "minecraft:damaged_anvil" | "minecraft:trapped_chest" | "minecraft:light_weighted_pressure_plate" | "minecraft:heavy_weighted_pressure_plate" | "minecraft:comparator" | "minecraft:daylight_detector" | "minecraft:redstone_block" | "minecraft:nether_quartz_ore" | "minecraft:hopper" | "minecraft:quartz_block" | "minecraft:chiseled_quartz_block" | "minecraft:quartz_pillar" | "minecraft:quartz_stairs" | "minecraft:activator_rail" | "minecraft:dropper" | "minecraft:white_terracotta" | "minecraft:orange_terracotta" | "minecraft:magenta_terracotta" | "minecraft:light_blue_terracotta" | "minecraft:yellow_terracotta" | "minecraft:lime_terracotta" | "minecraft:pink_terracotta" | "minecraft:gray_terracotta" | "minecraft:light_gray_terracotta" | "minecraft:cyan_terracotta" | "minecraft:purple_terracotta" | "minecraft:blue_terracotta" | "minecraft:brown_terracotta" | "minecraft:green_terracotta" | "minecraft:red_terracotta" | "minecraft:black_terracotta" | "minecraft:white_stained_glass_pane" | "minecraft:orange_stained_glass_pane" | "minecraft:magenta_stained_glass_pane" | "minecraft:light_blue_stained_glass_pane" | "minecraft:yellow_stained_glass_pane" | "minecraft:lime_stained_glass_pane" | "minecraft:pink_stained_glass_pane" | "minecraft:gray_stained_glass_pane" | "minecraft:light_gray_stained_glass_pane" | "minecraft:cyan_stained_glass_pane" | "minecraft:purple_stained_glass_pane" | "minecraft:blue_stained_glass_pane" | "minecraft:brown_stained_glass_pane" | "minecraft:green_stained_glass_pane" | "minecraft:red_stained_glass_pane" | "minecraft:black_stained_glass_pane" | "minecraft:acacia_stairs" | "minecraft:dark_oak_stairs" | "minecraft:slime_block" | "minecraft:barrier" | "minecraft:iron_trapdoor" | "minecraft:prismarine" | "minecraft:prismarine_bricks" | "minecraft:dark_prismarine" | "minecraft:prismarine_stairs" | "minecraft:prismarine_brick_stairs" | "minecraft:dark_prismarine_stairs" | "minecraft:prismarine_slab" | "minecraft:prismarine_brick_slab" | "minecraft:dark_prismarine_slab" | "minecraft:sea_lantern" | "minecraft:hay_block" | "minecraft:white_carpet" | "minecraft:orange_carpet" | "minecraft:magenta_carpet" | "minecraft:light_blue_carpet" | "minecraft:yellow_carpet" | "minecraft:lime_carpet" | "minecraft:pink_carpet" | "minecraft:gray_carpet" | "minecraft:light_gray_carpet" | "minecraft:cyan_carpet" | "minecraft:purple_carpet" | "minecraft:blue_carpet" | "minecraft:brown_carpet" | "minecraft:green_carpet" | "minecraft:red_carpet" | "minecraft:black_carpet" | "minecraft:terracotta" | "minecraft:coal_block" | "minecraft:packed_ice" | "minecraft:sunflower" | "minecraft:lilac" | "minecraft:rose_bush" | "minecraft:peony" | "minecraft:tall_grass" | "minecraft:large_fern" | "minecraft:white_banner" | "minecraft:orange_banner" | "minecraft:magenta_banner" | "minecraft:light_blue_banner" | "minecraft:yellow_banner" | "minecraft:lime_banner" | "minecraft:pink_banner" | "minecraft:gray_banner" | "minecraft:light_gray_banner" | "minecraft:cyan_banner" | "minecraft:purple_banner" | "minecraft:blue_banner" | "minecraft:brown_banner" | "minecraft:green_banner" | "minecraft:red_banner" | "minecraft:black_banner" | "minecraft:red_sandstone" | "minecraft:chiseled_red_sandstone" | "minecraft:cut_red_sandstone" | "minecraft:red_sandstone_stairs" | "minecraft:oak_slab" | "minecraft:spruce_slab" | "minecraft:birch_slab" | "minecraft:jungle_slab" | "minecraft:acacia_slab" | "minecraft:dark_oak_slab" | "minecraft:stone_slab" | "minecraft:smooth_stone_slab" | "minecraft:sandstone_slab" | "minecraft:cut_sandstone_slab" | "minecraft:petrified_oak_slab" | "minecraft:cobblestone_slab" | "minecraft:brick_slab" | "minecraft:stone_brick_slab" | "minecraft:nether_brick_slab" | "minecraft:quartz_slab" | "minecraft:red_sandstone_slab" | "minecraft:cut_red_sandstone_slab" | "minecraft:purpur_slab" | "minecraft:smooth_stone" | "minecraft:smooth_sandstone" | "minecraft:smooth_quartz" | "minecraft:smooth_red_sandstone" | "minecraft:spruce_fence_gate" | "minecraft:birch_fence_gate" | "minecraft:jungle_fence_gate" | "minecraft:acacia_fence_gate" | "minecraft:dark_oak_fence_gate" | "minecraft:spruce_fence" | "minecraft:birch_fence" | "minecraft:jungle_fence" | "minecraft:acacia_fence" | "minecraft:dark_oak_fence" | "minecraft:spruce_door" | "minecraft:birch_door" | "minecraft:jungle_door" | "minecraft:acacia_door" | "minecraft:dark_oak_door" | "minecraft:end_rod" | "minecraft:chorus_plant" | "minecraft:chorus_flower" | "minecraft:purpur_block" | "minecraft:purpur_pillar" | "minecraft:purpur_stairs" | "minecraft:end_stone_bricks" | "minecraft:grass_path" | "minecraft:repeating_command_block" | "minecraft:chain_command_block" | "minecraft:magma_block" | "minecraft:nether_wart_block" | "minecraft:red_nether_bricks" | "minecraft:bone_block" | "minecraft:structure_void" | "minecraft:observer" | "minecraft:shulker_box" | "minecraft:white_shulker_box" | "minecraft:orange_shulker_box" | "minecraft:magenta_shulker_box" | "minecraft:light_blue_shulker_box" | "minecraft:yellow_shulker_box" | "minecraft:lime_shulker_box" | "minecraft:pink_shulker_box" | "minecraft:gray_shulker_box" | "minecraft:light_gray_shulker_box" | "minecraft:cyan_shulker_box" | "minecraft:purple_shulker_box" | "minecraft:blue_shulker_box" | "minecraft:brown_shulker_box" | "minecraft:green_shulker_box" | "minecraft:red_shulker_box" | "minecraft:black_shulker_box" | "minecraft:white_glazed_terracotta" | "minecraft:orange_glazed_terracotta" | "minecraft:magenta_glazed_terracotta" | "minecraft:light_blue_glazed_terracotta" | "minecraft:yellow_glazed_terracotta" | "minecraft:lime_glazed_terracotta" | "minecraft:pink_glazed_terracotta" | "minecraft:gray_glazed_terracotta" | "minecraft:light_gray_glazed_terracotta" | "minecraft:cyan_glazed_terracotta" | "minecraft:purple_glazed_terracotta" | "minecraft:blue_glazed_terracotta" | "minecraft:brown_glazed_terracotta" | "minecraft:green_glazed_terracotta" | "minecraft:red_glazed_terracotta" | "minecraft:black_glazed_terracotta" | "minecraft:white_concrete" | "minecraft:orange_concrete" | "minecraft:magenta_concrete" | "minecraft:light_blue_concrete" | "minecraft:yellow_concrete" | "minecraft:lime_concrete" | "minecraft:pink_concrete" | "minecraft:gray_concrete" | "minecraft:light_gray_concrete" | "minecraft:cyan_concrete" | "minecraft:purple_concrete" | "minecraft:blue_concrete" | "minecraft:brown_concrete" | "minecraft:green_concrete" | "minecraft:red_concrete" | "minecraft:black_concrete" | "minecraft:white_concrete_powder" | "minecraft:orange_concrete_powder" | "minecraft:magenta_concrete_powder" | "minecraft:light_blue_concrete_powder" | "minecraft:yellow_concrete_powder" | "minecraft:lime_concrete_powder" | "minecraft:pink_concrete_powder" | "minecraft:gray_concrete_powder" | "minecraft:light_gray_concrete_powder" | "minecraft:cyan_concrete_powder" | "minecraft:purple_concrete_powder" | "minecraft:blue_concrete_powder" | "minecraft:brown_concrete_powder" | "minecraft:green_concrete_powder" | "minecraft:red_concrete_powder" | "minecraft:black_concrete_powder" | "minecraft:kelp" | "minecraft:dried_kelp_block" | "minecraft:turtle_egg" | "minecraft:dead_tube_coral_block" | "minecraft:dead_brain_coral_block" | "minecraft:dead_bubble_coral_block" | "minecraft:dead_fire_coral_block" | "minecraft:dead_horn_coral_block" | "minecraft:tube_coral_block" | "minecraft:brain_coral_block" | "minecraft:bubble_coral_block" | "minecraft:fire_coral_block" | "minecraft:horn_coral_block" | "minecraft:dead_tube_coral" | "minecraft:dead_brain_coral" | "minecraft:dead_bubble_coral" | "minecraft:dead_fire_coral" | "minecraft:dead_horn_coral" | "minecraft:tube_coral" | "minecraft:brain_coral" | "minecraft:bubble_coral" | "minecraft:fire_coral" | "minecraft:horn_coral" | "minecraft:dead_tube_coral_fan" | "minecraft:dead_brain_coral_fan" | "minecraft:dead_bubble_coral_fan" | "minecraft:dead_fire_coral_fan" | "minecraft:dead_horn_coral_fan" | "minecraft:tube_coral_fan" | "minecraft:brain_coral_fan" | "minecraft:bubble_coral_fan" | "minecraft:fire_coral_fan" | "minecraft:horn_coral_fan" | "minecraft:sea_pickle" | "minecraft:blue_ice" | "minecraft:conduit" | "minecraft:bamboo" | "minecraft:polished_granite_stairs" | "minecraft:smooth_red_sandstone_stairs" | "minecraft:mossy_stone_brick_stairs" | "minecraft:polished_diorite_stairs" | "minecraft:mossy_cobblestone_stairs" | "minecraft:end_stone_brick_stairs" | "minecraft:stone_stairs" | "minecraft:smooth_sandstone_stairs" | "minecraft:smooth_quartz_stairs" | "minecraft:granite_stairs" | "minecraft:andesite_stairs" | "minecraft:red_nether_brick_stairs" | "minecraft:polished_andesite_stairs" | "minecraft:diorite_stairs" | "minecraft:polished_granite_slab" | "minecraft:smooth_red_sandstone_slab" | "minecraft:mossy_stone_brick_slab" | "minecraft:polished_diorite_slab" | "minecraft:mossy_cobblestone_slab" | "minecraft:end_stone_brick_slab" | "minecraft:smooth_sandstone_slab" | "minecraft:smooth_quartz_slab" | "minecraft:granite_slab" | "minecraft:andesite_slab" | "minecraft:red_nether_brick_slab" | "minecraft:polished_andesite_slab" | "minecraft:diorite_slab" | "minecraft:brick_wall" | "minecraft:prismarine_wall" | "minecraft:red_sandstone_wall" | "minecraft:mossy_stone_brick_wall" | "minecraft:granite_wall" | "minecraft:stone_brick_wall" | "minecraft:nether_brick_wall" | "minecraft:andesite_wall" | "minecraft:red_nether_brick_wall" | "minecraft:sandstone_wall" | "minecraft:end_stone_brick_wall" | "minecraft:diorite_wall" | "minecraft:scaffolding" | "minecraft:loom" | "minecraft:barrel" | "minecraft:smoker" | "minecraft:blast_furnace" | "minecraft:cartography_table" | "minecraft:fletching_table" | "minecraft:grindstone" | "minecraft:lectern" | "minecraft:smithing_table" | "minecraft:stonecutter" | "minecraft:bell" | "minecraft:lantern" | "minecraft:soul_lantern" | "minecraft:campfire" | "minecraft:soul_campfire" | "minecraft:warped_stem" | "minecraft:stripped_warped_stem" | "minecraft:warped_hyphae" | "minecraft:stripped_warped_hyphae" | "minecraft:warped_nylium" | "minecraft:warped_fungus" | "minecraft:warped_wart_block" | "minecraft:warped_roots" | "minecraft:nether_sprouts" | "minecraft:crimson_stem" | "minecraft:stripped_crimson_stem" | "minecraft:crimson_hyphae" | "minecraft:stripped_crimson_hyphae" | "minecraft:crimson_nylium" | "minecraft:crimson_fungus" | "minecraft:shroomlight" | "minecraft:weeping_vines" | "minecraft:twisting_vines" | "minecraft:crimson_roots" | "minecraft:crimson_planks" | "minecraft:warped_planks" | "minecraft:crimson_slab" | "minecraft:warped_slab" | "minecraft:crimson_pressure_plate" | "minecraft:warped_pressure_plate" | "minecraft:crimson_fence" | "minecraft:warped_fence" | "minecraft:crimson_trapdoor" | "minecraft:warped_trapdoor" | "minecraft:crimson_fence_gate" | "minecraft:warped_fence_gate" | "minecraft:crimson_stairs" | "minecraft:warped_stairs" | "minecraft:crimson_button" | "minecraft:warped_button" | "minecraft:crimson_door" | "minecraft:warped_door" | "minecraft:crimson_sign" | "minecraft:warped_sign" | "minecraft:structure_block" | "minecraft:jigsaw" | "minecraft:composter" | "minecraft:target" | "minecraft:bee_nest" | "minecraft:beehive" | "minecraft:honey_block" | "minecraft:honeycomb_block" | "minecraft:netherite_block" | "minecraft:ancient_debris" | "minecraft:crying_obsidian" | "minecraft:respawn_anchor" | "minecraft:lodestone" | "minecraft:blackstone" | "minecraft:blackstone_stairs" | "minecraft:blackstone_wall" | "minecraft:blackstone_slab" | "minecraft:polished_blackstone" | "minecraft:polished_blackstone_bricks" | "minecraft:cracked_polished_blackstone_bricks" | "minecraft:chiseled_polished_blackstone" | "minecraft:polished_blackstone_brick_slab" | "minecraft:polished_blackstone_brick_stairs" | "minecraft:polished_blackstone_brick_wall" | "minecraft:gilded_blackstone" | "minecraft:polished_blackstone_stairs" | "minecraft:polished_blackstone_slab" | "minecraft:polished_blackstone_pressure_plate" | "minecraft:polished_blackstone_button" | "minecraft:polished_blackstone_wall" | "minecraft:chiseled_nether_bricks" | "minecraft:cracked_nether_bricks" | "minecraft:quartz_bricks" | "minecraft:turtle_helmet" | "minecraft:scute" | "minecraft:iron_shovel" | "minecraft:iron_pickaxe" | "minecraft:iron_axe" | "minecraft:flint_and_steel" | "minecraft:apple" | "minecraft:bow" | "minecraft:coal" | "minecraft:charcoal" | "minecraft:diamond" | "minecraft:iron_ingot" | "minecraft:gold_ingot" | "minecraft:netherite_ingot" | "minecraft:netherite_scrap" | "minecraft:iron_sword" | "minecraft:wooden_sword" | "minecraft:wooden_shovel" | "minecraft:wooden_pickaxe" | "minecraft:wooden_axe" | "minecraft:stone_sword" | "minecraft:stone_shovel" | "minecraft:stone_pickaxe" | "minecraft:stone_axe" | "minecraft:diamond_sword" | "minecraft:diamond_shovel" | "minecraft:diamond_pickaxe" | "minecraft:diamond_axe" | "minecraft:stick" | "minecraft:bowl" | "minecraft:mushroom_stew" | "minecraft:golden_sword" | "minecraft:golden_shovel" | "minecraft:golden_pickaxe" | "minecraft:golden_axe" | "minecraft:netherite_sword" | "minecraft:netherite_shovel" | "minecraft:netherite_pickaxe" | "minecraft:netherite_axe" | "minecraft:string" | "minecraft:feather" | "minecraft:gunpowder" | "minecraft:wooden_hoe" | "minecraft:stone_hoe" | "minecraft:iron_hoe" | "minecraft:diamond_hoe" | "minecraft:golden_hoe" | "minecraft:netherite_hoe" | "minecraft:wheat_seeds" | "minecraft:bread" | "minecraft:leather_helmet" | "minecraft:leather_chestplate" | "minecraft:leather_leggings" | "minecraft:leather_boots" | "minecraft:chainmail_helmet" | "minecraft:chainmail_chestplate" | "minecraft:chainmail_leggings" | "minecraft:chainmail_boots" | "minecraft:iron_helmet" | "minecraft:iron_chestplate" | "minecraft:iron_leggings" | "minecraft:iron_boots" | "minecraft:diamond_helmet" | "minecraft:diamond_chestplate" | "minecraft:diamond_leggings" | "minecraft:diamond_boots" | "minecraft:golden_helmet" | "minecraft:golden_chestplate" | "minecraft:golden_leggings" | "minecraft:golden_boots" | "minecraft:netherite_helmet" | "minecraft:netherite_chestplate" | "minecraft:netherite_leggings" | "minecraft:netherite_boots" | "minecraft:flint" | "minecraft:porkchop" | "minecraft:cooked_porkchop" | "minecraft:golden_apple" | "minecraft:enchanted_golden_apple" | "minecraft:bucket" | "minecraft:water_bucket" | "minecraft:lava_bucket" | "minecraft:saddle" | "minecraft:redstone" | "minecraft:oak_boat" | "minecraft:leather" | "minecraft:milk_bucket" | "minecraft:pufferfish_bucket" | "minecraft:salmon_bucket" | "minecraft:cod_bucket" | "minecraft:tropical_fish_bucket" | "minecraft:brick" | "minecraft:clay_ball" | "minecraft:paper" | "minecraft:book" | "minecraft:slime_ball" | "minecraft:compass" | "minecraft:fishing_rod" | "minecraft:clock" | "minecraft:glowstone_dust" | "minecraft:cooked_cod" | "minecraft:cooked_salmon" | "minecraft:ink_sac" | "minecraft:red_dye" | "minecraft:green_dye" | "minecraft:cocoa_beans" | "minecraft:lapis_lazuli" | "minecraft:purple_dye" | "minecraft:cyan_dye" | "minecraft:light_gray_dye" | "minecraft:gray_dye" | "minecraft:pink_dye" | "minecraft:lime_dye" | "minecraft:yellow_dye" | "minecraft:light_blue_dye" | "minecraft:magenta_dye" | "minecraft:orange_dye" | "minecraft:bone_meal" | "minecraft:blue_dye" | "minecraft:brown_dye" | "minecraft:black_dye" | "minecraft:white_dye" | "minecraft:bone" | "minecraft:sugar" | "minecraft:cookie" | "minecraft:filled_map" | "minecraft:shears" | "minecraft:melon_slice" | "minecraft:dried_kelp" | "minecraft:pumpkin_seeds" | "minecraft:melon_seeds" | "minecraft:beef" | "minecraft:cooked_beef" | "minecraft:cooked_chicken" | "minecraft:rotten_flesh" | "minecraft:blaze_rod" | "minecraft:ghast_tear" | "minecraft:gold_nugget" | "minecraft:glass_bottle" | "minecraft:spider_eye" | "minecraft:fermented_spider_eye" | "minecraft:blaze_powder" | "minecraft:magma_cream" | "minecraft:ender_eye" | "minecraft:glistering_melon_slice" | "minecraft:bat_spawn_egg" | "minecraft:bee_spawn_egg" | "minecraft:blaze_spawn_egg" | "minecraft:cat_spawn_egg" | "minecraft:cave_spider_spawn_egg" | "minecraft:chicken_spawn_egg" | "minecraft:cod_spawn_egg" | "minecraft:cow_spawn_egg" | "minecraft:creeper_spawn_egg" | "minecraft:dolphin_spawn_egg" | "minecraft:donkey_spawn_egg" | "minecraft:drowned_spawn_egg" | "minecraft:elder_guardian_spawn_egg" | "minecraft:enderman_spawn_egg" | "minecraft:endermite_spawn_egg" | "minecraft:evoker_spawn_egg" | "minecraft:fox_spawn_egg" | "minecraft:ghast_spawn_egg" | "minecraft:guardian_spawn_egg" | "minecraft:hoglin_spawn_egg" | "minecraft:horse_spawn_egg" | "minecraft:husk_spawn_egg" | "minecraft:llama_spawn_egg" | "minecraft:magma_cube_spawn_egg" | "minecraft:mooshroom_spawn_egg" | "minecraft:mule_spawn_egg" | "minecraft:ocelot_spawn_egg" | "minecraft:panda_spawn_egg" | "minecraft:parrot_spawn_egg" | "minecraft:phantom_spawn_egg" | "minecraft:pig_spawn_egg" | "minecraft:piglin_spawn_egg" | "minecraft:pillager_spawn_egg" | "minecraft:polar_bear_spawn_egg" | "minecraft:pufferfish_spawn_egg" | "minecraft:rabbit_spawn_egg" | "minecraft:ravager_spawn_egg" | "minecraft:salmon_spawn_egg" | "minecraft:sheep_spawn_egg" | "minecraft:shulker_spawn_egg" | "minecraft:silverfish_spawn_egg" | "minecraft:skeleton_spawn_egg" | "minecraft:skeleton_horse_spawn_egg" | "minecraft:slime_spawn_egg" | "minecraft:spider_spawn_egg" | "minecraft:squid_spawn_egg" | "minecraft:stray_spawn_egg" | "minecraft:strider_spawn_egg" | "minecraft:trader_llama_spawn_egg" | "minecraft:tropical_fish_spawn_egg" | "minecraft:turtle_spawn_egg" | "minecraft:vex_spawn_egg" | "minecraft:villager_spawn_egg" | "minecraft:vindicator_spawn_egg" | "minecraft:wandering_trader_spawn_egg" | "minecraft:witch_spawn_egg" | "minecraft:wither_skeleton_spawn_egg" | "minecraft:wolf_spawn_egg" | "minecraft:zoglin_spawn_egg" | "minecraft:zombie_spawn_egg" | "minecraft:zombie_horse_spawn_egg" | "minecraft:zombified_piglin_spawn_egg" | "minecraft:zombie_villager_spawn_egg" | "minecraft:fire_charge" | "minecraft:writable_book" | "minecraft:written_book" | "minecraft:emerald" | "minecraft:carrot" | "minecraft:potato" | "minecraft:baked_potato" | "minecraft:poisonous_potato" | "minecraft:map" | "minecraft:golden_carrot" | "minecraft:carrot_on_a_stick" | "minecraft:warped_fungus_on_a_stick" | "minecraft:nether_star" | "minecraft:pumpkin_pie" | "minecraft:firework_star" | "minecraft:enchanted_book" | "minecraft:nether_brick" | "minecraft:quartz" | "minecraft:prismarine_shard" | "minecraft:prismarine_crystals" | "minecraft:cooked_rabbit" | "minecraft:rabbit_stew" | "minecraft:rabbit_foot" | "minecraft:rabbit_hide" | "minecraft:iron_horse_armor" | "minecraft:golden_horse_armor" | "minecraft:diamond_horse_armor" | "minecraft:leather_horse_armor" | "minecraft:lead" | "minecraft:name_tag" | "minecraft:mutton" | "minecraft:cooked_mutton" | "minecraft:chorus_fruit" | "minecraft:popped_chorus_fruit" | "minecraft:beetroot" | "minecraft:beetroot_seeds" | "minecraft:beetroot_soup" | "minecraft:dragon_breath" | "minecraft:splash_potion" | "minecraft:tipped_arrow" | "minecraft:lingering_potion" | "minecraft:shield" | "minecraft:elytra" | "minecraft:spruce_boat" | "minecraft:birch_boat" | "minecraft:jungle_boat" | "minecraft:acacia_boat" | "minecraft:dark_oak_boat" | "minecraft:totem_of_undying" | "minecraft:shulker_shell" | "minecraft:iron_nugget" | "minecraft:knowledge_book" | "minecraft:debug_stick" | "minecraft:music_disc_13" | "minecraft:music_disc_cat" | "minecraft:music_disc_blocks" | "minecraft:music_disc_chirp" | "minecraft:music_disc_far" | "minecraft:music_disc_mall" | "minecraft:music_disc_mellohi" | "minecraft:music_disc_stal" | "minecraft:music_disc_strad" | "minecraft:music_disc_ward" | "minecraft:music_disc_11" | "minecraft:music_disc_wait" | "minecraft:music_disc_pigstep" | "minecraft:phantom_membrane" | "minecraft:nautilus_shell" | "minecraft:heart_of_the_sea" | "minecraft:crossbow" | "minecraft:suspicious_stew" | "minecraft:flower_banner_pattern" | "minecraft:creeper_banner_pattern" | "minecraft:skull_banner_pattern" | "minecraft:mojang_banner_pattern" | "minecraft:globe_banner_pattern" | "minecraft:piglin_banner_pattern" | "minecraft:sweet_berries" | "minecraft:honeycomb" | "minecraft:honey_bottle" | undefined, maxCount?: number | undefined) => void;
    clone: (begin: import("../arguments").Coordinates, end: import("../arguments").Coordinates, destination: import("../arguments").Coordinates) => import("./implementations").CloneOptions;
    data: Data;
    datapack: DatapackCommand;
    debug: Debug;
    defaultgamemode: (mode: GAMEMODES) => void;
    difficulty: (difficulty: import("../arguments").DIFFICULTIES) => void;
    effect: Effect;
    enchant: (targets: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false>, enchantment: LiteralUnion<import("../arguments").ENCHANTMENTS, string>, level?: number | undefined) => void;
    execute: Omit<Execute, 'run' | 'runOne'>;
    experience: Experience;
    fill: (from: import("../arguments").Coordinates, to: import("../arguments").Coordinates, block: LiteralUnion<import("../arguments").BLOCKS, string>) => typeof import("./implementations").FillArguments;
    forceload: Forceload;
    function: ((functionName: string) => void) & ((mcFunction: import("../datapack/Datapack").McFunction<[]>) => void);
    gamemode: (gamemode: GAMEMODES, target: SelectorArgument<false>) => void;
    gamerule: (gamerule: LiteralUnion<GAMERULES>, value: boolean | number) => void;
    give: (target: SelectorArgument<false>, item: LiteralUnion<ITEMS>, count?: number | undefined) => void;
    help: (command_?: "gamemode" | "clear" | "data" | "execute" | "attribute" | "bossbar" | "list" | "clone" | "datapack" | "debug" | "defaultgamemode" | "difficulty" | "effect" | "give" | "enchant" | "experience" | "advancement" | "fill" | "forceload" | "gamerule" | "help" | "kill" | "locate" | "locatebiome" | "loot" | "me" | "msg" | "particle" | "say" | "scoreboard" | "teleport" | "tellraw" | undefined) => void;
    kill: (targets: SelectorArgument<false>) => void;
    list: (uuids?: boolean | undefined) => void;
    locate: (structure: LiteralUnion<STRUCTURES>) => void;
    locatebiome: (biome: LiteralUnion<BIOMES>) => void;
    loot: Loot;
    me: (action: string) => void;
    msg: (action: string) => void;
    particle: ((name: "minecraft:dolphin" | "minecraft:elder_guardian" | "minecraft:witch" | "minecraft:lava" | "minecraft:mycelium" | "minecraft:barrier" | "minecraft:end_rod" | "minecraft:composter" | "minecraft:flame" | "minecraft:dragon_breath" | "minecraft:totem_of_undying" | "minecraft:ambient_entity_effect" | "minecraft:angry_villager" | "minecraft:bubble" | "minecraft:cloud" | "minecraft:crit" | "minecraft:damage_indicator" | "minecraft:dripping_lava" | "minecraft:falling_lava" | "minecraft:landing_lava" | "minecraft:dripping_water" | "minecraft:falling_water" | "minecraft:effect" | "minecraft:enchanted_hit" | "minecraft:enchant" | "minecraft:entity_effect" | "minecraft:explosion_emitter" | "minecraft:explosion" | "minecraft:firework" | "minecraft:fishing" | "minecraft:soul_fire_flame" | "minecraft:soul" | "minecraft:flash" | "minecraft:happy_villager" | "minecraft:heart" | "minecraft:instant_effect" | "minecraft:item_slime" | "minecraft:item_snowball" | "minecraft:large_smoke" | "minecraft:note" | "minecraft:poof" | "minecraft:portal" | "minecraft:rain" | "minecraft:smoke" | "minecraft:sneeze" | "minecraft:spit" | "minecraft:squid_ink" | "minecraft:sweep_attack" | "minecraft:underwater" | "minecraft:splash" | "minecraft:bubble_pop" | "minecraft:current_down" | "minecraft:bubble_column_up" | "minecraft:nautilus" | "minecraft:campfire_cosy_smoke" | "minecraft:campfire_signal_smoke" | "minecraft:dripping_honey" | "minecraft:falling_honey" | "minecraft:landing_honey" | "minecraft:falling_nectar" | "minecraft:ash" | "minecraft:crimson_spore" | "minecraft:warped_spore" | "minecraft:dripping_obsidian_tear" | "minecraft:falling_obsidian_tear" | "minecraft:landing_obsidian_tear" | "minecraft:reverse_portal" | "minecraft:white_ash", pos?: import("../variables").VectorClass<[string, string, string]> | [x: string, y: string, z: string] | undefined, delta?: [deltaX: number, deltaY: number, deltaZ: number] | undefined, speed?: number | undefined, count?: number | undefined, mode?: "force" | "normal" | undefined, viewers?: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false> | undefined) => void) & ((name: "minecraft:dust", colors: [red: number, green: number, blue: number, size: number], pos?: import("../variables").VectorClass<[string, string, string]> | [x: string, y: string, z: string] | undefined, delta?: [deltaX: number, deltaY: number, deltaZ: number] | undefined, speed?: number | undefined, count?: number | undefined, mode?: "force" | "normal" | undefined, viewers?: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false> | undefined) => void) & ((name: "minecraft:block" | "minecraft:falling_dust", block: LiteralUnion<import("../arguments").BLOCKS, string>, pos?: import("../variables").VectorClass<[string, string, string]> | [x: string, y: string, z: string] | undefined, delta?: [deltaX: number, deltaY: number, deltaZ: number] | undefined, speed?: number | undefined, count?: number | undefined, mode?: "force" | "normal" | undefined, viewers?: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false> | undefined) => void) & ((name: "minecraft:item", item: LiteralUnion<ITEMS, string>, pos?: import("../variables").VectorClass<[string, string, string]> | [x: string, y: string, z: string] | undefined, delta?: [deltaX: number, deltaY: number, deltaZ: number] | undefined, speed?: number | undefined, count?: number | undefined, mode?: "force" | "normal" | undefined, viewers?: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false> | undefined) => void);
    say: (...messages: string[]) => void;
    scoreboard: Scoreboard;
    teleport: ((destinationEntity: string | import("../variables").SelectorClass<true>) => void) & ((location: import("../arguments").Coordinates) => void) & ((targets: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false>, destinationEntity: string) => void) & ((targets: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false>, location: import("../arguments").Coordinates) => import("./implementations").TeleportFacing) & ((targets: string | import("../variables").SelectorClass<true> | import("../variables").SelectorClass<false>, location: import("../arguments").Coordinates, rotation: import("../arguments").Rotation) => void);
    tellraw: (targets: SelectorArgument<false>, message: JsonTextComponent) => void;
}
export default CommandsRoot;
