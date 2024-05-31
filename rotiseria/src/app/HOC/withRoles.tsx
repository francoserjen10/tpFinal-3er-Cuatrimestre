import { useRouter } from "next/navigation";

function hasRequiredPermissions(roles: number[]): boolean {
  const jwt = require("jsonwebtoken");
  const token = localStorage.getItem("accessToken");
  const respuesta = jwt.decode(token).rolId;
  const rol: number = respuesta;
  const resultadoRoles = roles.some((r) => r === rol);
  return resultadoRoles;
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
