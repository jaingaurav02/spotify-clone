import CollectionListItem from "./collectionListItem";

function CollectionSection() {
    let items = [1, 2, 3, 4, 5, 6, 7];
    return (
        <section className="mb-8">
            <div className="grid grid-cols-5 gap-6 ">
                {items.map((item, index) => {
                    return <CollectionListItem key={index} item={item} />
                })}
            </div>
        </section>
    )
}
export default CollectionSection;