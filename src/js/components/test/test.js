import Dude from '../dude/Dude';
import CreateDudeForm from '../createDudeForm/CreateDudeForm';
import ProgressBar from '../progressBar/ProgressBar';
import Checkbox from '../chackbox/Checkbox';

export default {
    components: {
        Dude,
        CreateDudeForm,
        ProgressBar,
        Checkbox
    },
    data() {
        return {
            lovingVue: false,
            num: 30,
            characters: [
                'loreipsum 1',
                'loreipsum 2',
                'loreipsum 3'
            ]
        };
    }
};