import * as SheetPrimitive from "@radix-ui/react-dialog";
import { ComponentPropsWithoutRef, ComponentRef, HTMLAttributes } from "react";

export type SheetOverlayProps = ComponentPropsWithoutRef<
  typeof SheetPrimitive.Overlay
>;
export type SheetOverlayRef = ComponentRef<typeof SheetPrimitive.Overlay>;

export type SheetBodyProps = HTMLAttributes<HTMLDivElement>;

export type SheetContentProps = ComponentPropsWithoutRef<
  typeof SheetPrimitive.Content
>;
export type SheetContentRef = ComponentRef<typeof SheetPrimitive.Content>;

export type SheetHeaderProps = HTMLAttributes<HTMLDivElement>;

export type SheetFooterProps = HTMLAttributes<HTMLDivElement> & {
  isLoading?: boolean;
};

export type SheetTitleProps = ComponentPropsWithoutRef<
  typeof SheetPrimitive.Title
>;
export type SheetTitleRef = ComponentRef<typeof SheetPrimitive.Title>;

export type SheetDescriptionProps = ComponentPropsWithoutRef<
  typeof SheetPrimitive.Description
>;
export type SheetDescriptionRef = ComponentRef<
  typeof SheetPrimitive.Description
>;
