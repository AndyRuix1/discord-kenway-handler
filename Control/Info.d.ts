import Error from './Error';
declare const bot: string;
declare const _default: {
    ERRORS: {
        CUSTOM_ERROR: (type: String, errorMessage: String, errorObject?: Error) => Error;
        CLIENT: {
            NO_TOKEN: string;
            NO_ID: string;
            NO_CMD_PATH: string;
            NO_EVT_PATH: string;
            NO_CMD_BOOL: string;
            NO_EVT_BOOL: string;
            NO_INTENTS: string;
            NO_PARTIALS: string;
            INVALID_PARTIALS: string;
            INVALID_INTENT: string;
            CMD_PATH_INVALID: string;
            EVT_PATH_INVALID: string;
        };
        COMMAND: {
            NO_NAME: string;
            NO_DESC: string;
            NO_OPT: string;
            NO_SUBCMD: string;
            NO_EXEC: string;
            NAME_CHAR_LIMIT: string;
            DESC_CHAR_LIMIT: string;
            NAME_HAS_C_LETTER: string;
            NAME_HAS_SPACE: string;
            MAX_OPT_LENGTH: string;
            SUBCMD_AND_OPTIONS_INVALID: string;
            OPTION: {
                NO_NAME: string;
                NO_DESC: string;
                NO_TYPE: string;
                NO_OPT: string;
                NO_OPT_WITH_GROUP_TYPE: string;
                NAME_CHAR_LIMIT: string;
                DESC_CHAR_LIMIT: string;
                NAME_HAS_C_LETTER: string;
                NAME_HAS_SPACE: string;
                MAX_OPT_LENGTH: string;
                INVALID_TYPE: string;
                OPT_NOT_WORK: string;
                INSIDE_OPTIONS: {
                    NO_NAME: string;
                    NO_DESC: string;
                    NO_TYPE: string;
                    INVALID_TYPE: string;
                    OPT_NOT_WORK: string;
                    NAME_CHAR_LIMIT: string;
                    DESC_CHAR_LIMIT: string;
                    NAME_HAS_C_LETTER: string;
                    NAME_HAS_SPACE: string;
                };
            };
            SUBCOMMAND: {
                NO_NAME: string;
                NO_DESC: string;
                NO_OPT: string;
                NAME_HAS_C_LETTER: string;
                NAME_HAS_SPACE: string;
                NAME_CHAR_LIMIT: string;
                DESC_CHAR_LIMIT: string;
                MAX_OPT_LENGTH: string;
                OPTION: {
                    NO_NAME: string;
                    NO_DESC: string;
                    NO_TYPE: string;
                    NAME_HAS_C_LETTER: string;
                    NAME_HAS_SPACE: string;
                    INVALID_TYPE: string;
                    NAME_CHAR_LIMIT: string;
                    DESC_CHAR_LIMIT: string;
                };
            };
        };
        EVENT: {
            NO_NAME: string;
            NO_EXEC: string;
        };
        PRESENCE: {
            NO_TIME: string;
            INVALID_TIME: string;
            NO_PRESENCE_LIST: string;
            LIST: {
                NO_STATUS: string;
                INVALID_STATUS: string;
                INVALID_AFK: string;
                INVALID_SHARD_ID: string;
                INVALID_SHARD_ARRAY: string;
                INVALID_SHARD_NUMBER: string;
                NO_ACTIVITY: string;
                ACTIVITY: {
                    NO_NAME: string;
                    INVALID_NAME: string;
                    INVALID_TYPE: string;
                    NO_TYPE: string;
                    NO_URL: string;
                };
            };
        };
        MODAL: {
            NO_TITLE: string;
            NO_ID: string;
            NO_COMPONENTS: string;
            COMPONENT_ITEM_INVALID: string;
            INVALID_ID_LENGTH: string;
            INVALID_TITLE_LENGTH: string;
            COMPONENTS_ITEMS_LIMIT: string;
            COMPONENTS: (propName: string, ErrorType: ('NO_ID' | 'NO_LABEL' | 'NO_STYLE' | 'NO_TYPE' | 'INVALID_STYLE' | 'INVALID_TYPE' | 'INVALID_ID_LENGTH' | 'INVALID_LABEL_LENGTH' | 'NO_PLACEHOLDER' | 'INVALID_PLACEHOLDER_LENGTH' | 'NO_TYPE_DEFAULT_VAL' | 'INVALID_DEFAULT_VAL_LENGTH' | 'INVALD_MAXLENGTH_TYPE' | 'INVALID_MINLENGTH_TYPE' | 'INVALID_MINLENGTH_LENGTH' | 'INVALID_MAXLENGTH_LENGTH' | 'INVALID_REQUIRED_TYPE')) => string;
        };
    };
    LOAD: {
        END: (time: string, data: {
            bot: string;
            eventos: number;
            comandos: number;
            servers: number;
            users: number;
            presences: number;
        }) => string;
        START: string;
        DELAY_10: string;
        DELAY_30: string;
        START_COMMAND: string;
        NO_COMMANDS_FOUND: string;
        COMMAND_LOADED: (file: string) => string;
        ALL_COMMAND_LOADED: string;
        START_EVENTS: string;
        NO_EVENTS_FOUND: string;
        EVENT_LOADED: (file: string) => string;
        ALL_EVENT_LOADED: string;
        START_PRESENCE: string;
        NO_PRESENCES: string;
        PRESENCE_LOADED: (presenceName: string) => string;
        ALL_PRESENCE_LOADED: string;
        WARN_STRUCTURE_PRESENCE: string;
    };
};
export default _default;
