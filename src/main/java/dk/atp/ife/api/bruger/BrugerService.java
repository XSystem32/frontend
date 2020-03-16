package dk.atp.ife.api.bruger;

import dk.atp.portal.context.AtpContext;
import dk.atp.xfe.fmwk.context.ContextHolder;
import dk.atp.xfe.fmwk.context.LoginContext;
import org.springframework.stereotype.Service;

@Service
public class BrugerService {


    public String getCurrentLoggedInUserName() {
        LoginContext loginContext = ContextHolder.getContext(LoginContext.class);
        return loginContext.getUserName();
    }


    public String getCurrentLoggedInEnterpriseUserId() {
        return AtpContext.getCurrentInstance().getEnterpriseUserId();
    }

}
