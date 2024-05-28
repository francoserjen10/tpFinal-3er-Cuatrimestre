import { useRouter } from "next/navigation";

function hasRequiredPermissions(roles: number[]): boolean {
  const jwt = require("jsonwebtoken");
  console.log("jwt", jwt);
  const token = localStorage.getItem("token");
  console.log("token", token);
  const respuesta = jwt.decode(token).usuario.admin;
  console.log("respuesta", respuesta);
  /*
    Administrador? 
    Usuario?
    *****
    Aca lo que hace es hardcodear los roles, pero tranquilamente puedo crear un servicio en el back donde me devuelva los roles y obtenerlos de ahi, para poder obtenerlos tambien aca
     */
  // const userPermissions = ["Administrador", "Usuario"];
  //.some = agarra todos los permisos requeridos (requiredPermissions[]) y se fija si estan incluidos en los permisos(userPermissions)
  // return requiredPermissions.some((permissions) =>
  // userPermissions.includes(permissions)
  // );

  /**
   * Esto puede traer problemas porque en mi db no tengo ningun metodo que trae los roles
   */
  const rol: number = respuesta;
  return roles.some((r) => {
    r === rol;
  });
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
