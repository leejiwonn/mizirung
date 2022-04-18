import styled from '@emotion/styled';
import { useLayoutEffect } from 'react';
import { GlassMagnifier } from 'react-image-magnifiers';

import MizirungImage from './assets/mizirung.png';
import PaperImage from './assets/paper.png';
import YeowonImage from './assets/yeowon.png';
import JiwonImage from './assets/jiwon.png';

import './styles/global.css';

const App = () => {
  useLayoutEffect(() => {
    new (window as any).Sakura('.sakura', {
      fallSpeed: 1,
      delay: 300,
    });
  }, []);

  return (
    <AppStyled>
      <PageBackground className="sakura" />
      <Page1Styled>
        <GlassMagnifier
          imageSrc={MizirungImage}
          largeImageSrc={MizirungImage}
          allowOverflow={true}
          magnifierSize="20%"
          magnifierBorderSize={3}
          magnifierBorderColor="rgba(255, 255, 255, .5)"
          square={false}
        />
      </Page1Styled>
      <Page2Styled>
        <Page2BackgroundImage src={PaperImage} alt="종이 이미지" />
        <Page2Title>
          미지야 안녕 너의 친구 여원, 지원이야. 아주 소소하지만 이렇게나마라도
          <br />
          누구보다 소중한 너의 결혼을 축하하려고 해 :) 설렘가득한 새출발을 앞둔
          <br />
          너에게 그동안 우리와 함께했던 시간들을 같이 추억해보면 좋을 것 같아서
          <br />한 장의 사진으로 만들어봤어. 너무 사랑하고, 결혼 너무 축하해 !
        </Page2Title>
        <Page2Content>
          <Page2LinkButtonStyled>
            <Page2LinkButton>
              <Page2LinkButtonImage src={YeowonImage} alt="예쁜 여원" />
              <Page2LinkButtonText>♥ 여오니 편지보기 ♥</Page2LinkButtonText>
            </Page2LinkButton>
            <Page2LinkButton>
              <Page2LinkButtonImage src={JiwonImage} alt="예쁜 지원" />
              <Page2LinkButtonText>♥ 지오니 편지보기 ♥</Page2LinkButtonText>
            </Page2LinkButton>
          </Page2LinkButtonStyled>
        </Page2Content>
      </Page2Styled>
    </AppStyled>
  );
};

export default App;

const AppStyled = styled.div`
  width: 100vw;
  height: 100%;
`;

const PageBackground = styled.div`
  width: 100%;
  height: 200vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

const Page1Styled = styled.div`
  width: 100%;
  height: auto;
`;

const Page2Styled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Page2BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Page2Title = styled.h1`
  font-size: 28px;
  line-height: 50px;
  text-align: center;
`;

const Page2Content = styled.div`
  margin-top: 50px;
`;

const Page2LinkButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const Page2LinkButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Page2LinkButtonImage = styled.img`
  width: 80%;
  height: 80%;
`;

const Page2LinkButtonText = styled.p`
  font-size: 24px;
  margin-top: 8px;
`;
