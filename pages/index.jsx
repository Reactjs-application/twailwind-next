import Image from 'next/image';

import img from '../public/cat.png';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <article className="prose prose-base prose-p:text-green-800 prose-img:rounded-xl prose-img:w-full">
                <h1>Cat Categeries Gallary Search</h1>
                <p>
                    For years parents have espoused the health benefits of eating garlic bread with
                    cheese to their children, with the food earning such an iconic status in our
                    culture that kids will often dress up as warm, cheesy loaf for Halloween.
                </p>
                <p>
                    But a recent study shows that the celebrated appetizer may be linked to a series
                    of rabies cases springing up around the country.
                </p>
                <Image src={img} alt="next images" />
            </article>
            <input
                type="text"
                className="form-input w-3/6 border-1 border-gray-400 p-1 rounded-sm  focus:border-gray-400 focus:outline-none mt-3 py-1"
                placeholder="Enter cat name"
            />
        </main>
    );
}
