import eIcon from '@/components/e-icon';
import eButton from '@/components/e-button';
import ePicture from '@/components/e-picture';
import eHeading from '@/components/e-heading';
import ePanel from '@/components/c-panel';
import eInput from '@/components/e-input';
import eCheckbox from '@/components/e-checkbox';
import eLabel from '@/components/e-label';
import eProgress from '@/components/e-progress';
import eTextarea from '@/components/e-textarea';
import eInfoLabel from '@/components/e-info-label';
import eRadio from '@/components/e-radio';
import cModal from '@/components/c-modal';
import cModalHeader01 from '@/components/c-modal-header-01';
import eSelect from '@/components/e-select';
import eFieldset from '@/components/e-fieldset';

export default {
  install(Vue) {
    const components = [
      eButton,
      eIcon,
      ePicture,
      eHeading,
      eInput,
      eCheckbox,
      eLabel,
      eProgress,
      eTextarea,
      eInfoLabel,
      eRadio,
      ePanel,
      cModal,
      cModalHeader01,
      eSelect,
    ];

    // This improves component usage in PhpStorm, while keeping optimized import in production
    if (process.env.NODE_ENV === 'production') {
      components.forEach((component) => {
        Vue.component(component.name, component);
      });
    } else {
      Vue.component(eButton.name, eButton);
      Vue.component(eIcon.name, eIcon);
      Vue.component(ePicture.name, ePicture);
      Vue.component(eHeading.name, eHeading);
      Vue.component(ePanel.name, ePanel);
      Vue.component(eProgress.name, eProgress);
      Vue.component(eInput.name, eInput);
      Vue.component(eCheckbox.name, eCheckbox);
      Vue.component(eLabel.name, eLabel);
      Vue.component(eTextarea.name, eTextarea);
      Vue.component(eInfoLabel.name, eInfoLabel);
      Vue.component(eRadio.name, eRadio);
      Vue.component(cModal.name, cModal);
      Vue.component(cModalHeader01.name, cModalHeader01);
      Vue.component(eSelect.name, eSelect);
      Vue.component(eFieldset.name, eFieldset);
    }
  },
};
