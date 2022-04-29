import styled from '@emotion/styled';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { GlassMagnifier } from 'react-image-magnifiers';
import Modal from 'react-modal';

import MizirungImage from './assets/mizirung.jpeg';
import PaperImage from './assets/paper.png';
import YeowonImage from './assets/yeowon.png';
import JiwonImage from './assets/jiwon.png';
import YeowonLetterImage from './assets/yeowon_letter.png';
import JiwonLetterImage from './assets/jiwon_letter.jpeg';
import BackgroundAudio from './assets/background_audio.mp3';

import './styles/global.css';

const App = () => {
  const [isOpen, setIsOpen] = useState<'yeowon' | 'jiwon' | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudioSafely = async (audio: HTMLAudioElement) => {
    try {
      await audio.play();
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (audio == null) {
      return;
    }

    if (isPlaying) {
      audio.muted = false;
      playAudioSafely(audio);
    }
  }, [isPlaying]);

  useLayoutEffect(() => {
    new (window as any).Sakura('.sakura', {
      fallSpeed: 1,
      delay: 300,
    });
  }, []);

  return (
    <AppStyled>
      <PageAudio
        ref={audioRef}
        preload="auto"
        autoPlay
        muted
        loop
        src={BackgroundAudio}
      />
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
          onImageLoad={() => {
            setIsPlaying(true);
          }}
        />
        <Page1Button
          onClick={() => {
            window.scrollTo({ top: window.screen.height });
          }}
        >
          Scroll Down
        </Page1Button>
      </Page1Styled>
      <Page2Styled>
        <Page2BackgroundImage src={PaperImage} alt="종이 이미지" />
        <Page2Title>
          미지야 안녕 ! 너의 친구 여원, 지원이야. 아주 소소하지만 이렇게나마라도
          <br />
          누구보다 소중한 너의 결혼을 축하하려고 해 :) 설렘가득한 새출발을 앞둔
          <br />
          너에게 그동안 우리와 함께했던 시간들을 같이 추억해보면 좋을 것 같아서
          <br />한 장의 사진으로 만들어봤어. 사랑하는 우리 미지 결혼 축하해 !
        </Page2Title>
        <Page2Content>
          <Page2LinkButtonStyled>
            <Page2LinkButton onClick={() => setIsOpen('yeowon')}>
              <Page2LinkButtonImage src={YeowonImage} alt="예쁜 여원" />
              <Page2LinkButtonText>♥ 여오니 편지보기 ♥</Page2LinkButtonText>
            </Page2LinkButton>
            <Page2LinkButton onClick={() => setIsOpen('jiwon')}>
              <Page2LinkButtonImage src={JiwonImage} alt="예쁜 지원" />
              <Page2LinkButtonText>♥ 지오니 편지보기 ♥</Page2LinkButtonText>
            </Page2LinkButton>
          </Page2LinkButtonStyled>
        </Page2Content>
      </Page2Styled>
      <Modal
        isOpen={!!isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(null)}
        style={modalStyle}
      >
        {isOpen === 'yeowon' ? (
          <LetterImage src={YeowonLetterImage} alt="여원 편지" />
        ) : (
          <LetterImage src={JiwonLetterImage} alt="지원 편지" />
        )}
      </Modal>
    </AppStyled>
  );
};

export default App;

const AppStyled = styled.div`
  width: 100vw;
  height: 100%;
`;

const PageAudio = styled.audio``;

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
  position: relative;
`;

const Page1Button = styled.button`
  position: absolute;
  top: 90vh;
  right: 2vw;
  border-radius: 40%;
  border: 2px solid #ccc;
  padding: 8px 12px;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: bold;
  z-index: 999;
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
  border: 0px;
`;

const Page2LinkButtonText = styled.p`
  font-size: 24px;
  margin-top: 8px;
`;

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    cursor: 'pointer',
  },
  content: {
    width: '80vw',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    postiion: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    border: 'none',
    borderRadius: 20,
    cursor: 'default',
    padding: 0,
    margin: 0,
  },
};

const LetterImage = styled.img`
  width: 80%;
  height: auto;
`;
