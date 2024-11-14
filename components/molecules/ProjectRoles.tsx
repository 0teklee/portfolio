import React from "react";

import RoleDescriptionRow from "@/components/atom/RoleDescriptionRow";
import Column from "@/components/ui/Column";

import { IProjectRoles } from "@/lib/types";

const ProjectRoles = ({ roles }: { roles: IProjectRoles[] }) => {
  return (
    <Column classNames={`w-full items-start`}>
      {roles.map((item, idx) => (
        <RoleDescriptionRow
          key={`${item.title}_role_description_${idx}`}
          {...item}
        />
      ))}
    </Column>
  );
};

export default ProjectRoles;
