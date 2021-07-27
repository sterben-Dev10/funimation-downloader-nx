import * as yaml from 'yaml';
import * as fs from 'fs';
const existsFile = fs.existsSync;

const loadYamlFile = (file: fs.PathLike) => {
    return yaml.parse(fs.readFileSync(file, 'utf8'));
};

const loadYamlCfg = (file: fs.PathLike) => {
    if(existsFile(`${file}.user.yml`)){
        file += '.user';
    }
    file += '.yml';
    if(fs.existsSync(file)){
        
        try{
            return loadYamlFile(file);
        }
        catch(e){
            return {};
        }
    }
    return {};
};

export default loadYamlCfg
