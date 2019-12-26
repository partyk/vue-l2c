import Dude from '../dude/Dude';
import CreateDudeForm from '../createDudeForm/CreateDudeForm';
import ProgressBar from '../progressBar/ProgressBar';

export default {
    components: {
        Dude,
        CreateDudeForm,
        ProgressBar
    },
    data() {
        return {
            characters: [
                'loreipsum 1',
                'loreipsum 2',
                'loreipsum 3'
            ]
        };
    }
};