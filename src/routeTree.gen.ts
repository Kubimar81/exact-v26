/* eslint-disable */
// @ts-nocheck
import { Route as rootRouteImport } from "./routes/__root";
import { Route as IndexRouteImport } from "./routes/index";
import { Route as NowaRouteImport } from "./routes/nowa";
import { Route as PobierzRouteImport } from "./routes/pobierz";
import { Route as StandardRouteImport } from "./routes/standard";
import { Route as Tabela23RouteImport } from "./routes/tabela-23";
import { Route as AnalizaIdRouteImport } from "./routes/analiza.$id";

const IndexRoute = IndexRouteImport.update({ id: "/", path: "/", getParentRoute: () => rootRouteImport } as any);
const NowaRoute = NowaRouteImport.update({ id: "/nowa", path: "/nowa", getParentRoute: () => rootRouteImport } as any);
const PobierzRoute = PobierzRouteImport.update({ id: "/pobierz", path: "/pobierz", getParentRoute: () => rootRouteImport } as any);
const StandardRoute = StandardRouteImport.update({ id: "/standard", path: "/standard", getParentRoute: () => rootRouteImport } as any);
const Tabela23Route = Tabela23RouteImport.update({ id: "/tabela-23", path: "/tabela-23", getParentRoute: () => rootRouteImport } as any);
const AnalizaIdRoute = AnalizaIdRouteImport.update({ id: "/analiza/$id", path: "/analiza/$id", getParentRoute: () => rootRouteImport } as any);

export const routeTree = rootRouteImport._addFileChildren({
  IndexRoute, NowaRoute, PobierzRoute, StandardRoute, Tabela23Route, AnalizaIdRoute,
})._addFileTypes();
