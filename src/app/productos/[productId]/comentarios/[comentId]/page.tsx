export default function CommentDetail({
  params,
}: {
  params: { productId: string; comentId: string };
}) {
  return (
    <h1>
      Comentario {params.comentId} del Producto {params.productId}
    </h1>
  );
}
