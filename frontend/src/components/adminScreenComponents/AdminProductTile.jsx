import react , {useState} from 'react';
import { Button } from "../smallCommonComponents/ButtonVariants";
import { Card, CardContent, CardFooter } from "../smallCommonComponents/CommonCard";
import DeleteConfirmationModal from "@/modals/DeleteConfirmationModal";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  return (
    <>
    <Card className="w-full max-w-sm mx-auto flex flex-col h-full">
    <div className="flex flex-col h-full">
       <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2 line-clamp-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-bold">${product?.salePrice}</span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center mt-auto">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => setOpenDeleteModal(true)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
      {openDeleteModal && (
        <DeleteConfirmationModal
          isOpen={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
          onConfirm={() => handleDelete(product?._id)}
        />
      )}
  </>
  );
}

export default AdminProductTile;