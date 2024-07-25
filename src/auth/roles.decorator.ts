import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

export const ROLES_KEY = ["user", "admin"];
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);