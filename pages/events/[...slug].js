import { useRouter } from 'next/router';

export default function FilteredEventsPage() {
    const router = useRouter();        
    
    const filterData = router.query.slug
    console.log(filterData);

    if (!filterData) {
        return <p className='center'>Loading...</p>
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if  (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
        ) {
            return <p>Invalid filter. Please adjust your values!</p>
    }
    
    return (

        <div>
            <h1>This is a Filtered event</h1>
        </div>
    )
}