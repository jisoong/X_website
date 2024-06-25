<template>
    <div>
      <header>
        <img class="logo" src="../assets/img/logo.png" @click="goToMain" alt="">
      </header>
      <div class="container">
        <div class="introduce">INTRODUCE</div>
  
        <nav class="menu">
          <router-link class="ourteam" to="/ourTeam">our team</router-link> | <router-link class="pipeline" to="/pipeline">pipeline</router-link>
        </nav>
        <div class="content">
          <div class="clickpart">파트를 클릭하면 해당 설명으로 이동합니다.</div>
          <div class="image-container">
            <img class="pipeline-img" src="@/assets/img/pipeline.png" usemap="#pipeline-map" alt="Pipeline">
            <div class="area-box" style="top: 45px; left: 0px; width: 25px; height: 45px;" @click="scrollTo('mv기획')"></div>
            <div class="area-box" style="top: 45px; left: 40px; width: 45px; height: 12px;" @click="scrollTo('촬영')"></div>
            <div class="area-box" style="top: 45px; left: 98px; width: 45px; height: 12px;" @click="scrollTo('딥페이크 작업')"></div>
            <div class="area-box" style="top: 45px; left: 155px; width: 45px; height: 12px;" @click="scrollTo('PLATE 준비 작업')"></div>
            <div class="area-box" style="top: 45px; left: 215px; width: 45px; height: 12px;" @click="scrollTo('3D 프로덕션')"></div>
            <div class="area-box" style="top: 80px; left: 40px; width: 45px; height: 12px;" @click="scrollTo('AI 보컬 학습')"></div>
            <div class="area-box" style="top: 80px; left: 98px; width: 45px; height: 12px;" @click="scrollTo('소스 보컬 녹음')"></div>
            <div class="area-box" style="top: 80px; left: 155px; width: 45px; height: 12px;" @click="scrollTo('AI 보컬 변환')"></div>
            <div class="area-box" style="top: 80px; left: 215px; width: 45px; height: 12px;" @click="scrollTo('음원 믹싱')"></div>
            <div class="area-box" style="top: 45px; left: 270px; width: 25px; height: 45px;" @click="scrollTo('MV 제작')"></div>
  
            <div class="area-box" style="top: 105px; left: 0px; width: 25px; height: 30px;" @click="scrollTo('서브 듀엣곡 제작')"></div>
            <div class="area-box" style="top: 115px; left: 40px; width: 45px; height: 12px;" @click="scrollTo('서브 듀엣곡 제작')"></div>
            <div class="area-box" style="top: 115px; left: 98px; width: 45px; height: 12px;" @click="scrollTo('서브 듀엣곡 제작')"></div>
            <div class="area-box" style="top: 115px; left: 155px; width: 45px; height: 12px;" @click="scrollTo('서브 듀엣곡 제작')"></div>
            <div class="area-box" style="top: 115px; left: 215px; width: 45px; height: 12px;" @click="scrollTo('서브 듀엣곡 제작')"></div>
  
            <div class="area-box" style="top: 154px; left: 0px; width: 45px; height: 12px;" @click="scrollTo('브랜딩')"></div>
            <div class="area-box" style="top: 154px; left: 58px; width: 45px; height: 12px;" @click="scrollTo('브랜딩')"></div>
            <div class="area-box" style="top: 154px; left: 115px; width: 48px; height: 12px;" @click="scrollTo('브랜딩')"></div>
            <div class="area-box" style="top: 154px; left: 175px; width: 52px; height: 12px;" @click="scrollTo('브랜딩')"></div>
  
            <div class="area-box" style="top: 188px; left: 40px; width: 102px; height: 12px;"  @click="scrollTo('웹 디자인')"></div>
            <div class="area-box" style="top: 188px; left: 155px; width: 105px; height: 12px;"  @click="scrollTo('웹 개발')"></div>
          </div>
        </div>
        <div class="sections">
          <div>
            <div ref="mv기획" class="section section-title">MV 기획</div>
            <div class="detail">
              <div class="detail-text">
                프로젝트를 통해 뮤직비디오를 제작시, 기존의 뮤직비디오의 형태를 그대로 따라가는 것은 프로젝트의 방향성과 맞지 않고, 흥미롭다 느껴지지 않았다.
                이에 우리는 뮤직비디오 기획에 재해석을 더하여 익숙한 노래지만 새로운 스토리가 담긴 콘텐츠를 만들고자 했다.<br><br>
                첫번째로 출연하게 될 아티스트를 정했다. teamX는 최종적으로 총 네명의 아티스트의 라인업을 꾸렸다.
                아티스트를 선택한 기준은 다음과 같다. 첫 번째, 세상을 떠난 가수다. AI 커버의 존재가치는 ‘듣지 못하는 걸 들을 수 있다’라고 생각한다.
                생각도 못 한 가수의 조합, 절대 부르지 않을 노래를 불러주는 AI 아티스트. 이것이 AI 커버의 가장 큰 메리트라고 느꼈고 이에 故 김광석의 AI 커버를 기획하게 되었다. <br><br>
                두번째는 대중성이 강한 아티스트다. AI 커버를 하더라도 그 아티스트의 목소리를 알아야 콘텐츠를 더 즐길 수 있다고 판단하였다.
                이에 유명하고 창법이 특징적인 이무진, 백예린, 비비 세 아티스트를 선정하였다. <br><br>
                곡들의 선정 기준 첫 번째는 뮤직비디오가 없는 곡이다.
                AI 커버에 더불어뮤직비디오를 제작하는 프로젝트이기 때문에 기존에 존재하지 않았던 뮤직비디오를 제작한다면 더욱 의미 있는 프로젝트가 될 것이라 생각하였다.
                이에 ‘Mr.blue sky -ELO’을 선택하였고, 기존 뮤비가 아쉬웠던 곡을 추가로 선정하여 ‘숲 - 최유리’를 선곡하였다.
                두 번째는 대중성이 강한 노래다. 아티스트를 선택한 이유와 동일하게, 원곡을 알아야 무엇이 달라졌는지, 어느 부분을 잘 살렸는지 알 수 있다고 생각했다.
                이에 ‘Officially Missing You - 긱스’를 선택했다. <br><br>
                세 번째로는 뮤직비디오를 보게 될법한 노래다. “뮤직비디오를 봐야만 그 노래를 다 즐겼다고 할 수 있다” 싶은 곡을 골랐다.
                ‘폰서트 - 10cm’를 선곡하여 내가 좋아하는 가수가 나에게 불러주는 팬송의 컨셉을 가져가고자 했다.
                또한 Plastic Love는 다른 뮤비와 달리 새로운 연출을 시도해볼 수 있다는 점에서 채택하였다.
              </div>
              <img class="detail-img" src="@/assets/img/mv기획_Fin.jpg" alt="">
            </div>
            <hr>
          </div>
          <div>
            <div ref="촬영" class="section section-title">촬영</div>
            <div class="detail">
              <div class="detail-text">
                teamX는 10시간 이상 순수히 촬영에 몰두하였다. 촬영의 분량이 많은 이유도 있으나, 딥페이크를 위해 신경써야할 부분이 많아 촬영 하나하나를 신중히 진행해야했다. 
                4월 11일 교내 스튜디오, 12일 외부 단독주택 스튜디오, 18일 숲 뮤직비디오 조연 아기배우 촬영으로 총 3일간 안성과 서울에서 촬영을 진행했다.<br><br>
  
                딥페이크 사전 테스트 결과, 배우의 이목구비가 아티스트와 닮을수록 싱크로율이 높다는 것을 확인하였다. 이를 반영하여 배우를 신중하게 섭외하고, 촬영을 철저히 준비하였다. <br><br>
  
                또한, 아티스트와의 싱크로율을 높이기 위해 옷차림을 비슷하게 맞추는 것이 중요하다는 점도 고려하였다. 
                이를 위해 스토리보드의 무드와 어울리면서도 해당 아티스트의 느낌을 잘 전달할 수 있도록 의상과 액세서리를 선정하였다.
                스토리보드에는 각 씬에 필요한 소품들과 분위기에 맞는 룩을 미리 정리해 두어, 촬영 준비 과정에서 이를 참고할 수 있도록 하였다. 
                소품, 배경 등의 세부 요소들도 스토리보드에 맞춰 준비하여, 일관된 분위기와 높은 완성도를 유지할 수 있도록 하였다.<br><br>
  
                이러한 준비 과정을 통해, 촬영 단계에서 배우와 아티스트의 싱크로율을 최대한 높일 수 있도록 하였다.<br><br>
  
                Officially Missing You, Plastic Love는 실 촬영 기반으로 스토리보드에 걸맞는 촬영 장소를 섭외하고 해당 장소에서 방문하여 촬영을 진행하였다.
                폰서트, 숲, Mr.Blue Sky은 그린스크린 촬영 기반으로 교내 그린스크린과 외부 스튜디오의 흰 벽에서 촬영하였다.<br><br>
  
                "숲"의 경우, 아역 배우가 필요했는데, 지인을 통해 적합한 배우를 섭외할 수 있었다. 아이와 촬영 시 자연스러운 결과물이 나올 수 있도록 편안한 환경을 조성하는 것이 중요했다. 
                촬영 중에는 아이와 놀아주며 좋은 분위기를 유지하여, 아이가 긴장하지 않고 자연스럽게 연기할 수 있도록 도왔다.<br><br>
              </div>
              <img class="detail-img" src="@/assets/img/촬영_Fin.jpg" alt="">
            </div>
            <hr>
          </div>
          <div>
            <div ref="딥페이크 작업" class="section section-title">딥페이크 작업</div>
            <div class="detail">
              <div class="detail-text">
                <b>| 학습 도구 선택</b> <br>
                딥페이크/Face swap을 수행하는 주요 도구로 오픈소스인 생성형 AI Stable Diffusion을 automatic 1111 1.7.0을 사용하였다.
                2024년 4월 기준 1.8.0 버전을 사용할 경우 mov2mov extention이 잘 작동되지 않았다.<br><br><br>
  
                <b>| 확장기능선택</b><br>
                Stable Diffusion의 확장 기능인 ReActor를 이용하여 Face swap을 진행하였다. 
                ReActor는 입력된 얼굴 이미지를 참고하여, 생성된 얼굴을 제공된 이미지의 얼굴로 바꿔주는 기능을 가진 확장 기능이다. 
                이를 통해 촬영본에서 배우의 얼굴을 아티스트의 얼굴로 변환하였다.<br><br>
                기존에 잘 알려져 있던 Loop활용도 고려하였으나 해당 확장 기능은 업데이트가 중단된 상태이므로 ReActor를 사용하였다.<br><br>
                또한, Stable Diffusion의 또 다른 확장 기능인 mov2mov를 활용하여 영상을 생성하였다. 
                mov2mov는 기존 영상을 참고하여 새로운 영상을 생성해주는 기능을 가진 확장 기능이다. 이 기능을 통해 Stable Diffusion 이미지가 아닌 영상을 출력할 수 있었다.<br><br><br>
  
  
                <b>| Check Point 모델</b><br>
                Stable Diffusion을 활용하는 과정에서, Check Point 모델로 beautifulRealistic_v7을 사용하였다. 
                변환하고자 하는 아티스트가 모두 한국인이었기 때문에, 아시아인 얼굴에 잘 맞는 Check Point 모델을 선택하여 싱크로율을 높이고자 하였다. 
                이를 통해 변환 결과의 정확성과 자연스러움을 극대화할 수 있었다. <br><br>
  
                또한, 생성되는 이미지의 퀄리티를 높이기 위해 VAE 모델을 활용하였다. VAE 모델은 이미지의 세부 디테일과 전반적인 품질을 향상시키는 데 중요한 역할을 하였다. 
                이를 통해 보다 높은 퀄리티의 이미지를 생성할 수 있었으며, 최종 결과물의 완성도를 크게 높일 수 있었다. <br><br>
  
                Check Point 모델과 VAE 모델 등 다양한 모델은 civitai.com과 같은 오픈 사이트에서 검색하여 사용하였다. 
                civitai.com은 많은 수의 고품질 모델을 보유하고 있어, 특정 요구에 맞는 모델을 쉽게 찾을 수 있다. 
                다양한 모델을 비교하고 선택함으로써, 프로젝트의 요구사항에 최적화된 결과를 얻을 수 있었다.
                또한 사이트에서 제공하는 사용 예시를 참고하면 모델의 특성과 활용 방법을 보다 잘 이해할 수 있어, 이를 통해 더욱 좋은 결과물을 얻을 수 있었다.<br><br><br>
  
  
                <b>| 시간 단축</b><br>
                딥페이크 작업을 진행하는 동안 가장 큰 도전 과제는 이미지 변환 시간을 단축하는 것이었다.
                테스트 결과, 1분 길이의 23.976fps 1920 x 1080 해상도의 영상을 생성하기 위해 RTX 3060 Ti를 사용했을 때 약 14시간이 소요되었다. 
                그러나 lcm_lora_sd15 모델을 활용하면 이 시간을 획기적으로 단축할 수 있었다.<br><br>
  
                기존에는 실사 기반의 이미지를 한 장 생성하는 데 30번 이상의 샘플링 과정을 거쳐야 했지만, lcm_lora_sd15 모델을 사용하면 4번에서 6번의 샘플링만으로도 거의 동일한 결과를 얻을 수 있었다. 
                이를 통해 이미지 생성 시간을 14시간에서 약 5시간으로 대폭 줄일 수 있었다. 이 모델을 통해 작업 효율성을 크게 향상시키고, 프로젝트의 전반적인 진행 속도를 높일 수 있었다.<br><br>
  
                실제 Face swap 과정에서 적용한 상세한 설정 내용을 첨부한다.<br><br>
                
                딥페이크 작업을 진행하면서 Check Point 모델, VAE 모델, 그리고 lcm_lora_sd15 모델을 사용하여 다음과 같은 설정을 적용하였다.<br><br>
  
                얼굴 이외의 배경에는 변화를 주지 않기로 하였기 때문에 프롬프트 박스에는 텍스트를 작성하지 않았다. <br><br>
  
                일반적으로 이미지 해상도가 클수록 생성 소요 시간이 길어지지만, 1920x1080보다 해상도가 작으면 영상 퀄리티에 영향을 미치기 때문에 타협할 수 있는 최고 수준인 FHD 해상도로 Face swap을 진행하였다. <br><br>
  
                Sampling method는 다양한 방법을 테스트한 후, 생성 속도가 빠르고 성능이 우수했던 DPM++ 2M Karras를 선택하였다. <br><br>
  
                lcm_lora_sd15 모델을 사용했기 때문에 Sampling steps는 5로 설정하였고, 프롬프트가 비어있으므로 CFG Scale은 가장 낮은 1로 설정하였다.
                또한, Denoising strength는 얼굴을 제외한 원본 훼손을 최소화하기 위해 0으로 설정하였다. <br><br>
                
                이러한 설정을 통해, 높은 품질의 결과물을 효율적으로 생성할 수 있었다. 각 모델과 파라미터의 조합을 최적화함으로써, 작업 시간과 품질을 모두 만족시키는 결과를 얻을 수 있었다.<br><br><br>
  
  
                <b>| 품질 개선</b><br>
                ReActor 확장 기능을 활용하면 이미지 한 장만으로 배우의 얼굴을 아티스트의 얼굴로 변환할 수 있다. 
                이에 따라, 배우의 얼굴에 가장 잘 맞는 아티스트의 이미지를 선정하는 것이 중요했다. <br><br>
  
                이를 위해 배우의 다양한 이미지를 최대한 많이 수집하고, 각 이미지에 대해 테스트를 진행하였다. 
                여러 테스트를 통해 배우의 얼굴과 가장 잘 어울리는 아티스트의 이미지를 신중하게 선택함으로써, 최종 변환 결과의 정확성과 자연스러움을 극대화할 수 있었다.<br><br>
  
                높은 싱크로율로 딥페이크를 구현하기 위해 CodeFormer Weight 값을 조절하였다. 
                테스트 결과, 이 값이 낮을수록 이미지의 지글거림이 심해지고 싱크로율이 낮아지는 문제가 발생하였다. 
                따라서 최적의 결과를 위해 CodeFormer Weight 값을 1로 설정하였다.<br><br>
  
                또한, Swap in source image 옵션과 Swap in generated image 옵션을 비교하여 테스트한 결과, Swap in source image 옵션을 적용할 때 이미지의 지글거림이 덜하다는 것을 확인하였다. 
                이에 따라, 최종적으로 Swap in source image 옵션을 적용하여 더욱 안정적이고 고품질의 딥페이크 이미지를 생성할 수 있었다.<br><br><br>
  
  
                <b>| 마스킹 작업</b><br>
                딥페이크 과정에서 최대한 자연스러운 결과를 얻기 위해 다양한 매개 변수를 설정하였으나, 여전히 이미지의 지글거림 현상이 남아 있었다. 
                이를 개선하기 위해 Adobe After Effects에서 추가적인 얼굴 마스크 작업을 진행하여 원본과 딥페이크본을 적절히 섞어 더욱 자연스러운 영상물을 만들었다.<br><br>
  
                특히 After Effects의 Face Tracking 기능을 활용하여 작업을 편리하게 수행할 수 있었다.<br><br>
  
                지글거림 현상 외에도 입모양이 부자연스러운 한계점이 존재하였다. 입모양의 부자연스러움을 개선하기 위해 수동으로 립 마스크 작업을 진행하여 이를 보완하였다. 
                이러한 추가적인 편집 과정을 통해 더욱 자연스러운 딥페이크 영상을 제작할 수 있었다.<br><br>
              </div>
              <div class="detail-img">
                <img src="@/assets/img/딥페이크_Fin01.jpg" alt="">
                <img src="@/assets/img/딥페이크_Fin02.jpg" alt="">
                <img src="@/assets/img/딥페이크_Fin03.jpg" alt="">
                <img src="@/assets/img/딥페이크_Fin04.jpg" alt="">
                <img src="@/assets/img/딥페이크_Fin05.jpg" alt="">
                <img src="@/assets/img/딥페이크_Fin06.jpg" alt="">
              </div>
  
            </div>
            <hr>
          </div>
          <div>
            <div  ref="PLATE 준비 작업" class="section section-title">PLATE 준비 작업</div>
            <div class="detail">
              <div class="detail-text">
                촬영 이후, 촬영본을 스토리보드에 맞게 다듬기 위해 컷 편집을 진행하였다. 이 과정에서 딥페이크에 필요한 부분만을 선별하여, 딥페이크 작업에 들이는 시간을 효율적으로 사용하고자 노력했다. 
                또한, 스토리의 흐름을 미리 컷 편집으로 정리해 두어 작업 속도를 높이고, 팀원 간의 협업을 보다 효율적으로 진행할 수 있었다.<br><br>
                
                스토리보드를 작성할 때 가사별로 칸을 나누었기 때문에 컷 편집 시 혼란을 줄이고, 일관된 작업을 유지할 수 있었다. <br><br>
                
                백예린과 비비 배우의 일부 촬영본은 흰 벽 앞에서 촬영되었기 때문에 Roto 작업이 필수적이었다. 
                처음에는 After Effects의 Roto brush를 활용하려 했으나, 퀄리티 저하 문제가 있었으므로 외부 AE 플러그인인 Mocha Pro를 사용하였다.
                Mocha Pro는 고품질의 Roto 작업을 가능하게 하여 최종 결과물의 퀄리티를 크게 향상시킬 수 있었다.<br>
                그러나 흰 벽에서의 촬영본을 전부 수동으로 Roto 작업하기에는 작업량이 많아 비효율적이었다. 이를 해결하기 위해 최종적으로 Switch Light Studio의 AI Roto 기능을 사용하였다.
                AI Roto 기능을 통해 자동으로 생성된 결과물을 기반으로, 부족했던 부분을 수동으로 Roto 작업하여 보완하였다.
                이러한 접근 방식을 통해 작업의 효율성을 높이고, 고품질의 최종 결과물을 얻을 수 있었다.<br><br>
  
                그린 스크린에서 촬영한 영상들의 경우 After Effects에서 배경을 제거해주는 작업을 진행하였다. 
                머리카락이 Keying 작업에 있어서 까다로웠기 때문에 몸과 머리를 레이어를 각각 Hard Matte와 Soft Matte로 따로 분리하여 작업을 하였다.<br><br>
  
                해당 작업에서는 Keylight 효과가 중점적으로 사용되었으며, Refine Hard Matte 효과와 Refine Soft Matte를 몸과 머리에 각각 적용하여 최선의 결과물을 얻을 수 있었다.
                인물에 전체적으로 묻어나는 초록색을 제거하기 위해서는 Advanced Spill Suppressor 효과를 활용하였다.<br><br>
              </div>
              <img class="detail-img" src="@/assets/img/플레이트준비작업_Fin.jpg" alt="">
            </div>
            <hr>
          </div>
          <div>
            <div ref="3D 프로덕션" class="section section-title">3D 프로덕션</div>
            <div class="detail">
              <div class="detail-text">
                모든 3D 작업은 무료 소프트웨어인 Blender에서 진행되었다. 
                BlenderKit 애드온을 활용하여 라이브러리에 있는 다양한 3D 애셋들을 사용하여 씬을 구성을 하였고, 이외에 필요한 애셋들의 경우에는 직접 모델링을 진행하였다. <br><br>
                모델링을 마친 후에는, UV 작업을 진행한 후, 텍스쳐링과 셰이딩 작업을 통해 애셋의 룩을 완성해주었다. 
                (숲과 폰서트의 경우에는 블렌더킷 애드온의 애셋들이 많이 사용되었으나, 뮤직비디오 특성상 Mr. Blue Sky의 경우에는 직접 제작한 애셋의 수가 많은 편이다.) <br><br>
                애니메이팅이 필요한 애셋의 경우에는 애니메이팅 작업을 진행해주었다. 
                모든 애셋들이 유기체가 아닌 사물이었기 때문에, Location, Rotation, Scale 세 값들만 조절하여도 충분한 애니메이팅이 가능하였다. 
                이후에는 이전 과정에서 작업한 Plate에 최대한 어울릴 수 있도록 라이팅 작업을 하였고, 렌더링을 하여 결과물을 얻어낼 수 있었다.
              </div>
              <img class="detail-img" src="@/assets/img/촬영_Fin.jpg" alt="">
            </div>
            <hr>
          </div>
          <div>
            <div ref="AI 보컬 학습" class="section section-title">AI 보컬 학습</div>
            <div class="detail">
              <div class="detail-text">
                <b>| 학습 도구 선정</b><br>
                AI 보컬 학습을 수행하는 주요 도구로  오픈소스 프로젝트인 Retrieval-based-Voice-Conversion-WebUI(RVC-project)를 사용하였다. 
                이 과정은 RVC-project의 Google Colab 버전을 활용하여 진행하였다. 
                Colab 무료 버전의 경우 장시간 접속하지 않으면 자동으로 다운되었기 때문에 Colab Pro버전을 사용하였다.<br><br><br>
  
                <b>| 데이터셋 제작</b><br>
                RVC-project를 활용한 학습에서 김광석, 이무진, 비비, 백예린 4명의 아티스트 보컬 모델을 만들기 위해 먼저 각 아티스트의 목소리 데이터셋을 제작했다.
                 이를 위해 각 아티스트의 고음질 음원을 30곡 내외로 구매하여 목소리 데이터를 수집하였다.<br><br><br>
  
                <b>| 데이터셋 제작-보컬가공</b><br>
                수집한 곡들에서 보컬을 분리하기 위해 Moises.ai 툴을 사용하였다. 그러나 분리된 보컬 트랙에는 리버브가 남아있고 화음이 제거되지 않은 부분이 있었다. 
                이러한 데이터를 학습시킬 경우, 학습이 제대로 이루어지지 않고 기계음이 발생할 수 있으므로, 리버브와 화음을 추가적으로 제거하는 작업이 필요했다.<br><br>
  
                리버브 제거는 Reverb HQ를, 화음 제거는 UVR-MDX-NET Karaoke2를 사용하여 오픈소스 프로그램인 Ultimate Vocal Remover를 활용하였다.
                이러한 과정을 통해 더욱 깨끗하고 명확한 보컬 데이터를 얻을 수 있었으며, 이를 바탕으로 AI 보컬 모델을 보다 정확하게 학습시킬 수 있었다.<br><br>
  
                추가적으로, Audacity를 활용하여 숨소리 제거 작업도 수행하였다. 
                한 번에 특정 볼륨 이하의 소리를 제거할 수 있는 자동화된 방법도 있었지만, 이 경우 목소리 데이터의 많은 부분이 손실될 위험이 있었다. 
                따라서, 데이터 손실을 최소화하기 위해 손수 숨소리를 제거하였다. 디테일한 편집 과정을 통해 보컬 데이터의 질을 높이고, AI 보컬 모델 학습의 정확성을 더욱 향상시킬 수 있었다.<br><br>
  
                가공한 목소리 파일을 15초 내외로 잘게 잘라 수백 개의 청크로 나누어 데이터셋을 제작하였다. 
                이 과정은 구글 코랩에 코드를 작성하여 진행하였으며, 파이썬의 ffmpeg와 pydub 라이브러리를 중점적으로 활용하였다. 
                또한, RVC 프로젝트는 wav 파일을 기준으로 작업하기 때문에, 모든 파일 포맷을 wav로 변환하여 저장하였다. 
                이를 통해 음성 데이터를 효과적으로 처리하고, AI 보컬 모델 학습에 최적화된 데이터셋을 준비할 수 있었다.<br><br><br>
  
                <b>| 학습 설정</b><br>
                제작한 데이터셋을 사용하여 아티스트의 목소리 모델을 학습시켰다. 이 과정에서 최적의 결과를 얻기 위해 몇 가지 중요한 설정을 적용하였다.
                먼저, Target sample rate를 48kHz로 설정하여 고음질의 음성을 확보하였고, RVC 프로젝트의 version은 v2를 사용하였다. 
                음성 피처를 추출하는 데는 harvest 알고리즘을 활용하여, 음성 데이터의 세부 특징을 효과적으로 추출하였다.<br><br>
  
                GPU는 구글 코랩의 T4를 사용하여 학습을 진행하였다. T4 GPU는 딥러닝 작업에 최적화된 성능을 제공하여, 빠르고 효율적인 학습이 가능했다. 
                모델이 충분히 학습되어 고품질의 음성을 생성할 수 있도록 Total training epoch는 250에서 400 사이로 설정하였다. 
                또한, 학습 과정에서 메모리 사용을 최적화하고 안정적인 학습을 위해 GPU당 batch size는 20으로 설정하였다. 
                학습 시간은 한 모델 당 대략적으로 학습 빈도 250 ~ 400 epoch, T4 기준 7~9시간이 소요되었다.<br><br>
  
                이러한 설정을 통해 아티스트의 목소리 모델을 효과적으로 학습시킬 수 있었으며, 최종적으로 높은 품질의 보컬 변환 모델을 제작할 수 있었다. 
                RVC 프로젝트에서 제공하는 다양한 설정 옵션을 활용하여 프로젝트의 요구사항에 맞는 최적의 결과를 도출할 수 있었다.
              </div>
              <div class="detail-img">
                <img src="@/assets/img/보컬학습_Fin01.jpg" alt="">
                <img src="@/assets/img/보컬학습_Fin02.jpg" alt="">
                <img src="@/assets/img/보컬학습_Fin03.jpg" alt="">
                <img src="@/assets/img/보컬학습_Fin04.jpg" alt="">
              </div>
            </div>
            <hr>
          </div>
          <div>
            <div ref="소스 보컬 녹음" class="section section-title">소스 보컬 녹음</div>
            <div class="detail">
              <div class="detail-text">
                AI 보컬 변환에서 가장 중요한 것은 인풋 오디오이다. 인풋 오디오에 코러스나 기타 노이즈가 섞이면 기계음이 출력되어 매우 부자연스러운 변환이 이루어지게 되기 때문이다. 
                이를 방지하기 위해 뮤직 비디오에 사용하는 음원에서 최대한 순수 보컬만 추출하고자 노력하였다. 그러나 부득이하게 이 과정이 어려운 곡의 경우 보컬 대역의 목소리를 직접 녹음하여 진행하였다.<br><br>
                소스 보컬 녹음 시, DAW에 마이크를 연결하여 녹음하였다. 녹음본은 다양한 아티스트의 목소리로 변환되어야 했으므로, 보컬 대역 목소리의 특색을 줄이는 방향으로 디렉팅을 진행하였다. 
                음원의 싱크와 정확히 맞아떨어지도록 하기 위해 한 구절씩 끊어서 녹음하고 이렇게 녹음된 파일을 동시 재생하여 싱크가 어긋나지 않는지 꼼꼼하게 확인하는 과정을 거쳤다. 
                이를 통해 녹음된 보컬이 이후의 변환 작업에서 자연스럽게 적용될 수 있도록 최적화하였다.
              </div>
              <img class="detail-img" src="@/assets/img/소스보컬녹음_Fin.jpg" alt="">
            </div>
            <hr>
          </div>
          <div>
            <div ref="AI 보컬 변환" class="section section-title">AI 보컬 변환</div>
            <div class="detail">
              <div class="detail-text">
                AI 보컬 변환의 경우 학습과 마찬가지로 오픈소스 프로젝트인 Retrieval-based-Voice-Conversion-WebUI(RVC-project)를 사용하였다. 
                이 과정은 로컬 컴퓨터를 활용하여 진행되었다.<br><br>
  
                변환을 진행하기 전에 RVC-project의 weight 폴더에 학습된 모델을 업로드하였다.<br><br>
  
                RVC-project-web-ui에서 학습된 목소리 모델을 선택한 후, 인풋오디오 경로를 입력하였다. 그리고 해당 아티스트의 목소리와 싱크로율을 높이기 위해 키를 조절하였다. 
                예를 들어, 백예린 아티스트의 목소리는 높은 키가 잘 어울리므로 키를 높게 설정하고, 김광석 아티스트의 목소리는 낮은 키가 잘 어울리므로 키를 낮게 설정하였다.<br><br>
  
                변환 과정에서는 빠르고 성능이 우수한 rmvpe 알고리즘을 선택하여 작업을 진행하였다. 
                변환 작업은 학습과 달리 컴퓨팅 성능에 크게 의존하지 않으며, 2분 내외의 곡도 일반적으로 30초 이내에 변환이 완료되었다.
                각 변수들은 모델의 특성에 맞게 세심하게 조절해가며 변환을 진행하였다. 
                이를 통해 AI 보컬 변환의 정확도와 품질을 높이고, 각 아티스트의 고유한 보컬 스타일을 효과적으로 재현할 수 있었다.
              </div>
              <img class="detail-img" src="@/assets/img/ai보컬변환_Fin.jpg" alt="">
            </div>
            <hr>
          </div>
          <div>
            <div ref="음원 믹싱" class="section section-title">음원 믹싱</div>
            <div class="detail">
              <div class="detail-text">
                변환된 ai 보컬을 활용하여 최종 음원 믹싱을 진행하였다.<br>
                먼저 보컬의 키에 맞춰 인스트루멘탈의 키를 조절하였다. 그리고 보컬에 리버브 효과를 적용하였다. 
                그러나 보컬 전체에 리버브를 적용할 경우 음원이 자연스럽지 않고 보컬이 붕 떠 있는 느낌을 줄 수 있어, 이를 해결하기 위해 가수의 목소리가 가장 잘 드러나는 음역대에만 리버브를 적용하여 적절한 공간감을 생성하였다.<br><br>
  
                음원의 분위기에 따라 다른 공간감을 생성하는 것도 중요한 부분이었다. 
                예를 들어, &lt;Mr. Blue Sky&gt;에서는 여타 음원들과 비슷하게 리버브를 적용했지만, &lt;Plastic Love&gt;에서는 시티팝스러운 느낌을 살리기 위해 리버브 파라미터 중 Room Size를 줄이고 Delay의 비중을 증대시켰다.
                마지막으로, 모든 음원을 -14 LUFS를 기준으로 정규화하여 일정한 음량을 유지하였다.
              </div>
              <img class="detail-img" src="@/assets/img/음원믹싱_Fin.jpg" alt="">
            </div>
            <hr>
          </div>
          <div>
            <div ref="MV 제작" class="section section-title">MV 제작</div>
            <div class="detail">
              <div class="detail-text">
                <b>| 최종영상 보정 및 효과</b><br>
                컷편집본에 입혀진 딥페이크 결과물과 가공된 음원을 합치고, 적절한 효과를 추가하여 영상미를 높였다. 
                숲의 경우 기존의 몽환적인 분위기와 다소 정적인 느낌을 담고자 채도를 낮추고 코지한 분위기를 연출했다. 
                Officially missing you는 다소 날카로운 소재를 담았기에 영상 전체로 쿨한 톤을 지켰고, 스토리를 매우 은유적으로 나타내기 위해 2D 애니메이션 작업을 진행했다. 
                Plastic Love는 핑크톤에 약간 노이즈 효과를 섞어 레트로한 감성을 담았다. 위와 같이 각 영상들은 짜여진 스토리를 더욱 극대화 할 수 있는 기법으로 디벨롭 되었다.<br><br><br>
  
                <b>| 합성</b><br>
                &lt;숲&gt;, &lt;폰서트&gt;, &lt;Mr. Blue Sky&gt;의 경우, 촬영본 딥페이크와 직접 제작한 3D 배경 및 에셋 작업물을 합성하는 과정을 거쳤다.<br><br>
  
                자연스러운 컴포지팅을 위해 딥페이크 촬영본과 잘 어울리도록 3D 배경에 라이팅 작업을 진행하였다. 이후 After Effects에서 추가적인 색보정을 진행하여 퀄리티를 높일 수 있었다. 
                3D 애셋 외에 영상에 재미를 더해줄 2D 애셋들은 이미지를 사용하거나 After Effets에서 Shape와 Mask 기능들을 통해 직접 제작하였고, 키프레임을 줌으로써 애니메이팅 작업을 수행하였다.<br><br>
  
                또한, 3D 이미지 시퀀스를 AgX 컬러 스페이스의 EXR 확장자로 렌더링하여 After Effects에서의 Linear Workflow 방식으로 진행하였다. 
                EXR 파일 형식은 높은 동적 범위와 색 정확도를 제공하여, 후반 작업에서 유연하게 활용할 수 있었다. <br><br><br>
  
                <b>| 생성형 AI 활용</b><br>
                &lt;Plastic Love &gt;의 경우 MV 제작 과정에서 특별히 생성형 AI를 통해 2D 애니메이션 씬을 제작하였다.<br><br>
  
                2D 애니메이션 씬 제작의 주요 도구로 Stable Diffusion을 활용하였다. 
                일본 시티팝 풍의 애니메이션 이미지를 생성하기 위해 Stable Diffusion에서 Check Point 모델부터 LoRa까지 딥페이크와는 완전히 다른 설정을 적용해야 했다. 
                이러한 설정 변경을 통해, 일본 시티팝의 독특한 분위기와 스타일을 효과적으로 구현할 수 있었다.<br><br><br>
  
                <b>| Check Point 모델 설정</b><br>
                Check Point 모델로 Anything_XL을 사용하였다. Anything_XL은 만화풍의 이미지 생성에 매우 효과적인 모델이다. 
                애니메이션 그림체는 다양하지만, 특히 순정만화 풍의 이미지를 잘 생성하기 위해 Sailor Moon LoRa 모델을 함께 사용하였다. 
                LoRa는 이미지의 스타일을 특정 방향으로 변화시키는 확장 기능이다.<br><br>
  
                Anything_XL과 Sailor Moon LoRa를 함께 사용하여 2D 순정 만화의 특징을 잘 살린 이미지를 생성할 수 있었다. 
                이러한 조합을 통해 일본 시티팝 풍의 독특한 분위기와 스타일을 효과적으로 구현할 수 있었으며, MV에 독특한 시각적 요소를 더하고 전체적인 완성도를 높일 수 있었다.<br><br><br>
  
                <b>| 손발 생성 오류 이슈 해결</b><br>
                이미지를 생성하기 위해 변수 설정은 civitai.com에서 다양한 이미지 생성 예시를 참고하였다. 
                생성형 AI는 손과 발을 생성하는 데 매우 취약했기 때문에, 이러한 오류를 줄이기 위해 추가적인 embeddings를 사용하였다. 
                이를 통해 손과 발의 디테일을 개선하고, 전체적으로 높은 퀄리티의 이미지를 생성하고자 노력했다. <br><br><br>
  
                <b>| 상세 세팅값 설명</b><br>
                실제 2D 만화 이미지 생성 과정에서 적용한 상세한 설정 내용을 첨부한다. <br>
                2D 이미지 생성의 디테일한 과정은 다음과 같다.<br><br>
  
                먼저, txt2img 기능을 활용하여 작성한 프롬프트대로 512x512 크기의 이미지를 생성하였다. 
                이 과정에서는 이미지를 빠르게 테스트 생성하여 작성한 프롬프트가 부족하지 않은지 확인했다. 
                생성된 이미지를 검토한 후, 원하는 결과와 비교하여 필요에 따라 프롬프트를 수정하고 보완하였다. 이러한 과정을 반복하여 프롬프트를 최적화하였다.<br><br>
  
                프롬프트가 최적화되면 본격적으로 2x2 배열로 이미지를 생성한다. 이렇게 하면 한 번에 4장의 이미지를 생성할 수 있어 다양한 옵션을 동시에 확인할 수 있었다.
                4장 중 한 장이라도 원하는 이미지를 생성할 때까지 이를 반복해준다. <br><br>
  
                이렇게 했는데도 완벽히 원하는 퀄리티의 이미지를 얻지 못했다면 지금까지 생성한 이미지 중 괜찮은 퀄리티의 이미지를 향상시키는 방법을 사용할 수 있다. <br><br>
                
                이미지를 img2img 탭으로 이동시킨 후 해당 이미지를 참고한 다른 이미지를 생성할 수 있다.
                이때, Denoising strength를 0.6정도로 설정하면 원본 스타일을 참고하면서 이미지 퀄리티가 향상되었으나 0.75 보다 더 높을 시 원본과 많이 다른 이미지가 생성되었다.<br><br>
                
                적당한 변수를 찾고 잘 활용하면 txt2img 를 통해 뽑은 이미지의 구도나 색감을 참고하여 더 나은 퀄리티의 이미지를 만들 수 있다. <br><br><br>
  
                <b>| 촬영본 변환</b><br>
                한편, img2img 기능은 실사 촬영본을 참고하여 애니메이션 풍으로 만드는 방식으로도 사용되었다.
                배우 실 촬영본의 일부를 인풋으로 넣고 변수를 조절하면 실사 이미지를 만화 풍으로 바꿀 수 있었다. 
                이 경우 Denoising strength를 0.6 이상으로 설정해야 만화같은 이미지가 생성되었다.<br><br>
  
                생성형 AI를 활용하여 이미지를 생성했지만, 이를 움직이게 만드는 것은 여전히 어려운 과제였다. 이를 해결하기 위해 사용한 세 가지 방법을 소개한다.<br>
                 1. Adobe After Effects에서 마스크를 따고, 키포인트를 주는 간단한 영상 편집 활용<br>
                 2. 2D 이미지를 영상으로 변환해주는 AI 툴(runway, pika 등) 활용<br>
                 3. 처음과 끝 이미지를 제공하면 사이의 이미지를 보간해주는 ToonCrafter(AI) 활용<br>
                이러한 다양한 접근 방식을 통해 실제 2D 애니메이션 같은 뮤직비디오를 제작할 수 있었다.<br><br><br>
  
                <b>| 폰서트 영상에 활용된 생성형 이미지</b><br>
                폰서트에서도 생성형 AI를 활용한 씬이 필요했다. 이는 배우의 자세는 그대로 유지하면서 옷만 바뀌어야 하는 어려운 작업이었다. 
                이 씬을 만들기 위해 Photoshop Beta의 이미지 생성 프롬프트를 사용하였다. <br><br>
                먼저 배우의 신체 부위(손목, 팔, 다리 등)는 제외하고 옷만 누끼를 땄다. 
                처음에는 옷의 경계를 딱 맞게 선택 영역을 지정하였지만, 이미지 생성 시 기존 옷보다 작은 옷이 만들어졌다. 
                이를 방지하기 위해 기존 옷보다 약간 더 넓은 영역을 선택하여 배우와 비슷한 덩치의 옷을 생성했다.<br><br>
                이 방법을 통해 배우의 자세는 그대로 유지하면서도 다양한 스타일의 옷을 자연스럽게 바꿀 수 있었다. 
              </div>
              <div class="detail-img">
                <img src="@/assets/img/MV제작_Fin01.jpg" alt="">
                <img src="@/assets/img/MV제작_Fin02.jpg" alt="">
                <img src="@/assets/img/MV제작_Fin03.jpg" alt="">
                <img src="@/assets/img/MV제작_Fin04.jpg" alt="">
                <img src="@/assets/img/MV제작_Fin05.jpg" alt="">
                <img src="@/assets/img/MV제작_Fin06.jpg" alt="">
                <img src="@/assets/img/MV제작_Fin07.jpg" alt="">
              </div>
            </div>
            <hr>
          </div>
          <div>
            <div ref="서브 듀엣곡 제작" class="section section-title">서브 듀엣곡 제작</div>
            <div class="detail">
              <div class="detail-text">
                서브곡 제작을 위해 먼저 듀엣 곡과 아티스트 라인업을 선정하였다. 
                아티스트 라인업의 경우 24개 이상의 아티스트 보이스 모델을 테스트한 후, 음원과 가장 조화로운 아티스트들로 선정하였다. 
                제작의 편의성과 자동화를 고려하기 위해 키를 하나로 통일하고, 이에 따라 각 곡에 어울리는 키를 선정하였다.<br><br>
  
                아티스트 보이스 모델은 두 가지 방법으로 확보하였다. 일부 모델은 직접 학습을 통해 제작하였고, 나머지 모델은 weights.gg에서 구하였다. 
                다양한 보이스 모델을 제공하는 사이트인 weights.gg를 활용하면 더 많은 아티스트를 테스트하고 선택지를 더욱 다채롭게 만들 수 있었다. 
                이를 통해 최적의 아티스트 조합을 찾아내어 듀엣 곡의 완성도를 높일 수 있었다.<br><br>
  
                다음 단계에서는 듀엣곡의 원본 음원을  instrumental, backing vocal, vocal 로 분리한 후, vocal을 두 개의 파트로 적절히 분배하였다.
                이 과정에서 몇 가지 시행착오가 있었다. &lt;어떻게 이별까지 사랑하겠어, 널 사랑하는 거지&gt; (악동뮤지션)의 경우 남녀 보컬 파트 분리가 쉽지 않았다. 
                &lt;칵테일 사랑&gt; (마로니에)은 남녀 파트 분배는 어렵지 않았지만, 곡이 오래되어 음질이 좋지 않았다. 
                &lt;Bubble Gum&gt; (NewJeans)은 코러스가 중요한 곡이었으나, 분리가 쉽지 않았다.
                각각의 곡에서 문제점이 있었지만, 이는 직접 보컬 소스를 녹음하거나 다양한 음원 소스를 찾고 조합하여 해결할 수 있었다.<br><br>
  
                분배한 보컬 두 파트를 각각 아티스트 목소리로 변환하고 instrumental, backing vocal과 조합하여 곡 당 3 x 3 조합의 음원(총 27개 음원)을 제작하였다. 
                보컬 변환 시에는 RVC-Project를 활용하였다. 보컬 변환에 대한 자세한 내용은 AI 보컬 변환 파트에 기록해두었다.
              </div>
              <div class="detail-img">
                <img src="@/assets/img/서브곡제작_Fin01.jpg" alt="">
                <img src="@/assets/img/서브곡제작_Fin02.jpg" alt="">
              </div>
            </div>
            <hr>
          </div>
          <div>
            <div ref="웹 디자인" class="section section-title">웹 디자인</div>
            <div class="detail">
              <div class="detail-text">
                웹 디자인을 시작하기 전 팀원 모두와 레퍼런스를 공유하는 시간을 가졌다. 다양한 웹을 체험해보고 팀 컬러에 맞는 미니멀한 웹을 디자인하고자 여러가지 고민을 하였다. 
                우선 큰 틀을 잡고 세부적인 요소들을 추가하는 과정으로 작업했다. <br><br>
  
                크게 메인 - 선택 - 결과 순으로 구성하였는데 웹의 첫인상이 될 메인페이지는 팀의 BI를 활용하여 디자인하였다. 
                또한 흐름에 맞게 버튼 크기와 위치를 지정하여 다른 페이지도 제작하였다.<br><br>
  
                선택 페이지에서 주목할 점은 아티스트와 곡의 선택 플로우다. 
                둘이 별개의 것을 합친다는 것이 아니라 유기적으로 연결됨을 보이기 위해 한가지를 선택 시 다른 하나가 은은하게 보이도록 배치하였다.<br><br>
  
                결과 페이지에서는 상세페이지와 같은 형식으로 길게 작업하였다. 보통 심리테스트 웹의 결과 페이지와 유사한 레이아웃을 가지되, 간결하고 필요한 정보들을 요약하여 담았다.
              </div>
              <img class="detail-img" src="@/assets/img/웹디자인_Fin.jpg" alt="">
            </div>
            <hr>
          </div>
          <div>
            <div ref="웹 개발" class="section section-title">웹 개발</div>
            <div class="detail">
              <div class="detail-text">
                <b>| 환경세팅</b><br>
                웹개발 기술스택으로는 프레임워크 - vue.js, 상태관리 - vuex, 호스팅 - AWS, 개발 환경 - Visual Studio Code를 활용하였다.<br><br>
  
                프로젝트 셋업 과정에서는 프로젝트 구조 설정 및 필요한 Vue.js 개발 환경을 구성하였다. 
                본 프로젝트에서는 node.js, vue, vuex, vue cli, router를 설치하고 개발을 용이하게 하기 위해 vscode플러그인으로 vue.js플러그인, Vetur, Prettier, ESLint(권장), GitLens(권장), Material Theme(권장) 를 설치하였다.<br><br>
                
                <b>| HTML</b><br>
                먼저 HTML을 사용하여 전체적인 레이아웃을 구현해 틀을 잡았다.<br>
                아이콘은 FontAwesome의 CDN을 사용하였다.<br><br>
  
                <b>| Javascript</b><br>
                추가적으로 Javascript 개발을 통해 UI의 동적인 부분을 구현했다. 본 프로젝트에서는 Vue를 사용하여 데이터와 뷰를 쉽게 바인딩하였다. 
                Vuex 상태를 가져와서 컴포넌트 내에서 활용하였다. 그리고 비동기 데이터 로딩 및 처리 과정을 거쳤다. 
                모달 창 관리, 페이지 이동 등의 동적으로 UI 업데이트를 하였다. 라우터를 이용해 다른 페이지로 이동을 구현하였다. 이 과정에서 페이지 간의 데이터는 props로 전달하였다.<br><br>
                
                <b>| CSS</b><br>
                CSS를 사용하여 각 페이지의 스타일을 적용했다. @media태그를 이용해 웹을 반응형으로 제작하였다.<br><br>
  
                <b>| 유저테스트</b><br>
                웹의 전체적인 구현 이후 유저테스트를 거쳤다. 이후 디버깅 및 최적화 과정과 배포 및 유지보수 과정을 진행하였다.
              </div>
              <div class="detail-img">
                <img src="@/assets/img/웹_Fin01.jpg" alt="">
                <img src="@/assets/img/웹_Fin02.jpg" alt="">
                <img src="@/assets/img/웹_Fin03.jpg" alt="">
              </div>
            </div>
            <hr>
          </div>
          <div>
            <div ref="브랜딩" class="section section-title">브랜딩</div>
            <div class="detail">
              <div class="detail-text">
                프로젝트 기획의 큰 틀을 보고 크게 느낀 것은 “이 콘텐츠를 묶을 무언가가 필요하다"였다. 이는 곧 브랜딩으로 이어졌다.<br><br>
                브랜딩에 생소한 팀원들을 위해 왜 브랜딩을 해야하는지에 대해 설명하였다. 브랜딩은 거창한 게 아니다. 단순히 우리의 작업을 하나로 묶어줄 주머니와 같은 역할을 할 뿐이다.
                브랜딩의 중요성은 일상에서도 많이 찾아볼 수 있다.<br><br>
  
                예를 들어 걸그룹 아이브의 나르시시즘 컨셉을 담은 다양한 곡들이 아이브라는 장르로 묶일 수 있던 이유는, ‘아이브'라는 하나의 브랜드로서 사람들에게 각인 되었기 때문이다. 
                AI 보컬 변환이라는 대중들에게 매우 익숙한 기술 그리고 딥페이크를 빈 도화지에 이름 없이 배치한다면, 우리 팀의 콘텐츠보다는 공공성을 보일것이라 생각했다. 
                그래서 우선 팀명과 로고를 정하고 브랜드의 키 컬러를 잡아 하나의 주머니를 만들었다. <br><br>
  
                또한 브랜드의 지향점을 프로젝트의 키워드로 잡고 다양한 비쥬얼 바리에이션을 선보이며 우리의 주머니를 가방으로 만들어나가는 작업을 진행했다. <br><br><br>
  
                SNS를 통한 브랜딩이 대세인 만큼 우리팀 역시 2주 간격으로 팀컬러를 담은 개발자 노트를 업로드하고, 브랜드와 관련한 콘텐츠를 카드뉴스 형식으로 엮어 업로드 했다. 
                유튜브에는 프로젝트의 비하인드 영상과 티저영상을 업로드 하여 두 매체의 특성을 최대한 살려 브랜딩 하였다.<br><br>
  
                그리고 이후 발행되는 모든 인쇄물과 콘텐츠에는 우리의 키 컬러와 BI를 활용해 통일감을 더했다.<br><br>
  
                team X의 로고는 음악기호 더블샵에서 영감을 받은 형태다. 각 모서리는 여러 방향으로 나아가는 모습을 통해 team X의 다양한 퍼스널 콘텐츠를 나타내었다.  
                더블샵의 각짐을 라운드로 변형하여 team X의 독창성을 표현하고, 파인 원의 형상을 통해 시각화 키워드를 담았다.<br><br>
                전시회 DP 모습을 3D로 시각화하고, 최종적으로 보여질 프로젝트의 전체적인 구상을 진행하였다. 이를 통해 관람객이 전시를 어떻게 경험할지에 대한 구체적인 계획을 수립하였다. 
                3D 시각화는 공간 배치, 조명 효과, 디스플레이 위치 등을 미리 확인하고 조정할 수 있게 하여, 최적의 전시 환경을 조성하는 데 중요한 역할을 했다. 
                또한, 관람객의 동선을 고려하여 각 작품이 효과적으로 전달될 수 있도록 구역을 분배하고 전시 구성을 최적화했다. 
                이러한 과정을 통해 전시의 완성도를 높이고, 관람객에게 보다 몰입감 있고 감동적인 경험을 제공하고자 하였다.
              </div>
              <div class="detail-img">
                <img src="@/assets/img/브랜딩_Fin01.jpg" alt="">
                <img src="@/assets/img/브랜딩_Fin02.jpg" alt="">
              </div>
            </div>
          </div>
  
  
        </div>
        <img class="footer-logo" src="../assets/img/BI.png" alt="">
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToMain() {
        this.$router.push('/');
      },
      scrollTo(section) {
        const element = this.$refs[section];
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
  
  header, .container {
      font-family: 'Pretendard', sans-serif;
  }
  
  header {
      width: 100%;
      background-color: white; /* 배경색을 추가하여 확인 */
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000; /* 다른 요소들 위에 표시되도록 z-index 설정 */
  }

.logo{
  width:30px;
  margin-top: 20px;
  padding-left: 20px;
  position: fixed;
}
  
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100% */
    overflow-x: hidden;
}
.introduce{
    margin-top: 80px;

    color:#172BFF;
    font-size: 35px;
    text-align: center;
    font-weight: bold;
}
  .menu {
      margin-top: 20px;
      margin-bottom:30px;
      font-size: 15px;
      font-weight: bold;
      text-decoration: none;
      color: inherit;
  }
  .ourteam{
    color: #222222;
    text-decoration: none;
  }
  .pipeline{
    color:#172BFF;
    text-decoration: none;
  }
  
  .content {
      position: relative;
  }
  
  .content img {
      width: 100%;
      max-width: 300px;
  }
  .clickpart{
    text-align: center;
    color:#172BFF;
    font-size: 15px;
    margin-bottom:30px;
  }
  
  .pipeline-img{
    margin-bottom:100px;
  }
  
  .area-box {
      position: absolute;
      /* border: 2px solid red; */
  }
  
  .sections {
      margin-top: 20px;
      width: 80vw;
  }
  
  /* .section {
      padding: 20px;
      border: 1px solid #ccc;
      margin-bottom: 20px;
      background-color: #f9f9f9;
      width:90vw;
  } */
  .section-title{
    color:#172BFF;
    font-size:20px;
    margin: 0% 1%;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .detail{
    display: flex;
    align-items: flex-start;
  }
  .detail-text, .detail-img{
    max-width: 48%;
    min-width: 48%;
    width:48%;
    margin: 0% 1%;
    object-fit: contain;
  }
  .detail-text{
    font-size:10px;
    text-align: justify;
    line-height: 15px;
  }
  
  .detail-img img{
    width: 100%;
  }
  
  hr{
    margin-top: 40px;
    margin-bottom: 40px;
  }
  
  .footer-logo{
    margin-top: 30px;
    padding-top: 50px;
    width: 50px;
    padding-bottom: 40px;
    background-color : rgb(0,0,0,0.8);
    padding-left:50vw;
    padding-right:50vw;
    overflow-x: hidden;
  }
  b{
    font-weight: bold;
  }
  </style>
  