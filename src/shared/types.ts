import { NextFunction, Request, Response } from "express";

export type ControllerFunctions<T extends Array<string>> = {
    [K in T[number]]: (req: Request, res: Response, next: NextFunction) => Promise<void>
};

export type RequestBody = Record<string | number | symbol, unknown>;

export type Server = { close: () => void };