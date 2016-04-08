package xd.fw.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import xd.fw.bean.Mod;
import xd.fw.service.FwService;

import java.util.List;

@Controller
public class ModAction extends BaseAction{
    @Autowired
    FwService fwService;
    List<Mod> mods;
    public String obtainUserMods() throws Exception {
        mods = fwService.getUserMods(Integer.parseInt(obtainFilterValue()));
        return SUCCESS;
    }

    public List<Mod> getMods() {
        return mods;
    }
}
