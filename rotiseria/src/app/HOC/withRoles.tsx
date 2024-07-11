import { useRouter } from "next/navigation";

function hasRequiredPermissions(roles: number[]): boolean {
  if (typeof window !== "undefined") {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("accessToken");
    if (token) {
      const respuesta = jwt.decode(token).rolId;
      if (respuesta) {
        const rol: number = respuesta;
        const resultadoRoles = roles.some((r) => r === rol);
        return resultadoRoles;
      }
    }
  }
  return false;
}

/**
 * Preguntar:
 * Qur tipado va en componentes != any
 */
export function withRoles(
  Component: any,
  requiredPermissions: number[],
  goBackRoute: string
) {
  return function withRolesWrapper(props: any) {
    const router = useRouter();
    const hasPermission = hasRequiredPermissions(requiredPermissions);
    if (hasPermission) {
      return <Component {...props} />;
    } else {
      router.push(goBackRoute);
      return null;
    }
  };
}
