import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useOpenCategory } from '../hooks/use-open-category';
import { CategoryForm } from './category-form';
import { insertCategoriesSchema } from '@/db/schema';
import { z } from 'zod';

import { useGetCategory } from '../api/use-get-category';
import { Loader2 } from 'lucide-react';
import { useEditCategory } from '../api/use-edit-category';

const formSchema = insertCategoriesSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export const EditCategorySheet = () => {
  const { isOpen, onClose, id } = useOpenCategory();

  const categoryQuery = useGetCategory(id);
  const editMutation = useEditCategory(id);

  const isPending = editMutation.isPending;

  const isLoading = categoryQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    editMutation.mutate(values);
  };

  const defaultValues = categoryQuery.data
    ? {
        name: categoryQuery.data.name,
      }
    : {
        name: '',
      };
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>Edit Category</SheetTitle>
          <SheetDescription>Edit an Category</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <CategoryForm
            id={id}
            onSubmit={onSubmit}
            disabled={isPending}
            defaultValues={defaultValues}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};
