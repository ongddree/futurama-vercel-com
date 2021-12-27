import Link from "next/link";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
}

export const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={`navi-${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
