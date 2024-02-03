import { useQueries } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchGetFoodList, IFoodInfo } from '../apis/api';

const useFoodList = () => {
    const [foodList, setFoodList] = useState<IFoodInfo[]>([]);
    const [searchParam] = useSearchParams();
    const categories = searchParam.get('category')?.split(',') ?? [];

    const combinedQueries = useQueries({
        queries: categories.map((cat) => {
            return { queryKey: ['food', { date: cat }], queryFn: () => fetchGetFoodList(cat) };
        }),
        combine: (results) => {
            return {
                data: results.map((result) => result.data?.meals ?? []),
                pending: results.some((result) => result.isPending),
            };
        },
    });

    useEffect(() => {
        // const categories = searchParam.get('category')?.split(',') ?? [];
        // fetchFoodListAll(categories);
    }, [searchParam]);

    useEffect(() => {
        if (!combinedQueries.pending) {
            const foodList: IFoodInfo[] = [];

            for (const data of combinedQueries.data) {
                foodList.push(...data);
            }

            setFoodList(foodList);
        }
    }, [combinedQueries]);

    return { foodList };
};

export default useFoodList;
