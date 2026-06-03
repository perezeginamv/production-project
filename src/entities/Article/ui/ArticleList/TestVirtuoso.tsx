import { Virtuoso } from 'react-virtuoso';

console.log('Virtuoso component:', Virtuoso); // Должно быть function

export const TestVirtuoso = () => {
    console.log('TestVirtuoso rendered');
    const items = Array.from({ length: 50 }, (_, i) => ({ id: i, name: `Item ${i}` }));

    return (
        <Virtuoso
            style={{ height: '100%', border: '2px solid blue' }}
            totalCount={items.length}
            itemContent={(index) => {
                const item = items[index];
                return <div style={{ padding: '20px', borderBottom: '1px solid black' }}>
                    {item?.name || 'Loading...'}
                </div>;
            }}
        />
    );
};