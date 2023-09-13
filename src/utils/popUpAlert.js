import Swal from "sweetalert2";

function PopupAlert({
  title,
  text,
  icon,
  confirmButtonText,
  successTitle,
  successMsg,
  successIcon,
}) {
  Swal.fire({
    title: title || "Are you sure?",
    text: text || "You won't be able to revert this!",
    icon: icon || "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText || "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // DB operations
      Swal.fire(
        successTitle || "Deleted!",
        successMsg || "File had been deleted",
        successIcon || "success"
      );
    }
  });
}

export default PopupAlert;
