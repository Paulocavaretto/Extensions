import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the Paulo_ext extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'Paulo_ext',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension Paulo_ext is activated!');
  }
};

export default extension;
