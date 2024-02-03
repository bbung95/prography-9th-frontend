import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { fetchGetCategory } from '../apis/api';
import { ITab } from '../components/TabBox/TabBox';

const useFilterTab = () => {
    const { data, isLoading } = useQuery(['category'], fetchGetCategory);
    const [searchParams, setSearchParams] = useSearchParams();
    const [tabs, setTabs] = useState<ITab[]>([]);

    const handleSelectCategory = (strCategory: string) => {
        const categories = searchParams.get('category')?.split(',') ?? [];
        searchParams.delete('category');

        // query string이 있을 경우
        if (categories.includes(strCategory)) {
            const tamp = categories.filter((cat) => cat !== strCategory);
            searchParams.append('category', tamp.join(','));
        } else {
            const param = categories.length > 0 ? categories.join(',') + ',' : '';
            searchParams.append('category', param + strCategory);
        }
        setSearchParams(searchParams);
    };

    useEffect(() => {
        if (!isLoading) {
            const newTabs: ITab[] =
                data?.categories.map((tab) => {
                    const categories = searchParams.get('category')?.split(',') ?? [];
                    const isFocus = !!categories.find((cat) => cat === tab.strCategory);
                    return { ...tab, isFocus };
                }) ?? [];
            setTabs(newTabs);
        }
    }, [searchParams, isLoading]);

    return { isLoading, tabs, handleSelectCategory };
};

export default useFilterTab;
