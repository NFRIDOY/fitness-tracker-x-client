import { Gallery } from "react-grid-gallery";
import Header1 from './../../components/Headers/Header1';
import { Helmet } from "react-helmet";



export default function GalleryPage() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 174,
            // isSelected: true,
            // caption: "",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1670513670485-b23274483f89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 212,
            // tags: [
            //     { value: "Ocean", title: "Ocean" },
            //     { value: "People", title: "People" },
            // ],
            // alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 212,
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1672280783572-4a254a8e71d5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 174,
            // isSelected: true,
            // caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 212,
            // tags: [
            //     { value: "Ocean", title: "Ocean" },
            //     { value: "People", title: "People" },
            // ],
            // alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 212,
        }, {
            src: "https://images.unsplash.com/photo-1535743686920-55e4145369b9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 174,
            // isSelected: true,
            // caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 212,
            // tags: [
            //     { value: "Ocean", title: "Ocean" },
            //     { value: "People", title: "People" },
            // ],
            // alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 212,
        },
        {
            src: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 174,
            // isSelected: true,
            // caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 212,
            // tags: [
            //     { value: "Ocean", title: "Ocean" },
            //     { value: "People", title: "People" },
            // ],
            // alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 320,
            height: 212,
        },
    ];

    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Gallery Page</title>
            </Helmet>
            <div>
                
                <Header1>
                    Gallery
                </Header1>
                <Gallery images={images} />
            </div>
        </div>
        // <div>GalleryPage</div>
    )
}
