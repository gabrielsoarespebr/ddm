import industrialBelt from "../../../../assets/images/industrialBelt.webp";

export const CatalogueFilterPanel = () => {
  const categoryList = [
    { id: 1, title: "Todos os produtos", imageUrl: industrialBelt },
    { id: 2, title: "Correias industriais", imageUrl: industrialBelt },
    { id: 3, title: "Polias", imageUrl: industrialBelt },
    { id: 4, title: "Rolamentos", imageUrl: industrialBelt },
  ];

  return (
    <div className="py-10 flex flex-col items-center">
      <ul className="w-1/2 flex justify-around">
        {categoryList.map((category) => (
          <li key={category.id} className="text-center w-1/6">
            <img src={category.imageUrl} alt={category.title} loading="lazy" />
            <p>{category.title}</p>
          </li>
        ))}
      </ul>
      <input type="text" name="" id="" className="center border" />
    </div>
  );
};
