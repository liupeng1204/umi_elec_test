import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useEffect } from 'react';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  useEffect(() => {
    if (window.versions) {
      // 使用preload.js中暴露的versions变量
      console.info(
        `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`,
      );
    }
  }, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
