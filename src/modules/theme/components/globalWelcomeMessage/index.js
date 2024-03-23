/* eslint-disable no-unused-vars */
import React from 'react';
import Skeleton from '@common_skeleton';
import cx from 'classnames';
import { getWelcomeMessage } from '@core_modules/theme/services/graphql';

const GlobalPromoMessage = () => {
    const { data, loading } = getWelcomeMessage();

    if (loading) {
        return (
            <div id="welcome-message-skeleton">
                <Skeleton height={38} className={cx('!top-[10px]', '!left-[25%]', '!w-[50vw]')} />
            </div>
        );
    }

    if (!loading && data?.storeConfig?.welcome) {
        return (
            <>
                <div
                    id="welcome-message"
                    className={cx(
                        'welcome-message',
                        'py-2',
                        'h-[38px]',
                        'text-center',
                        'font-normal',
                        'tablet:text-base',
                        'text-xs',
                        'mobile:max-tablet:text-sm',
                        'bg-primary-700',
                        'text-neutral-white',
                        'mobile:max-tablet:py-1',
                    )}
                >
                    {data.storeConfig.welcome}
                </div>
            </>
        );
    }

    return null;
};

export default GlobalPromoMessage;
