package dk.atp.ife.api.bruger;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "bruger")
public class BrugerController {

    @Autowired
    private BrugerService brugerService;

    @GetMapping("/enterpriseuserid")
    public String getCurrentLoggedInEnterpriseUserId() {
        return brugerService.getCurrentLoggedInEnterpriseUserId();
    }

}
