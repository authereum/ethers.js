"use strict";

import hid from "@ledgerhq/hw-transport-webhid";

export type TransportCreator = {
    create: () => Promise<Transport>;
};

export const transports: { [ name: string ]: TransportCreator } = {
    "hid": hid,
    "default": hid
};
