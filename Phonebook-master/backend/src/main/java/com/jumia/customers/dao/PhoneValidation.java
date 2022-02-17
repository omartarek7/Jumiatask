package com.task.jumiaphonenumbertask.Validation;

import com.task.jumiaphonenumbertask.Entity.Customer;
import com.task.jumiaphonenumbertask.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Component
public class PhoneValidation {
    @Autowired
    private Customer customer;

    @Autowired
    private CustomerRepository customerRepository;

    public void isValid(String phoneNumber) {

        Customer customer1 = new Customer();
        if (phoneNumber == null) {
            //return false;
        }
        Pattern p_cameroon = Pattern.compile("\\(237\\)\\ ?[2368]\\d{7,8}$");
        Pattern p_ethiopia = Pattern.compile("\\(251\\)\\ ?[1-59]\\d{8}$");
        Pattern p_morocco = Pattern.compile("\\(212\\)\\ ?[5-9]\\d{8}$");
        Pattern p_mozambique = Pattern.compile("\\(258\\)\\ ?[28]\\d{7,8}$");
        Pattern p_Uganda = Pattern.compile("\\(256\\)\\ ?\\d{9}$");
        Matcher matcher_cameroon = p_cameroon.matcher(phoneNumber);
        Matcher matcher_ethiopia = p_ethiopia.matcher(phoneNumber);
        Matcher matcher_morocco = p_morocco.matcher(phoneNumber);
        Matcher matcher_mozambique = p_mozambique.matcher(phoneNumber);
        Matcher matcher_Uganda = p_Uganda.matcher(phoneNumber);
        try {
            if (matcher_cameroon.matches()) {

                customer1.setCountry("Cameron");
                customer1.setCountry_code("+237");
                customer1.setState("Valid");

                System.out.println(customer1.getCountry()+ " "+customer1.getCountry_code() +" "+ customer1.getState());
            } else if (matcher_ethiopia.matches()){

                customer1.setCountry("Ethiopia");
                customer1.setCountry_code("+251");
                customer1.setState("Valid");
                System.out.println(customer1.getCountry() + " "+customer1.getCountry_code() +" "+ customer1.getState());
            } else if (matcher_morocco.matches()){

                customer1.setCountry("Morocco");
                customer1.setCountry_code("+212");
                customer1.setState("Valid");
                System.out.println(customer1.getCountry() + " " +customer1.getCountry_code() +" " +customer1.getState());
            }
            else if (matcher_mozambique.matches()){

                customer1.setCountry("Mozambique");
                customer1.setCountry_code("+258");
                customer1.setState("Valid");
                System.out.println(customer1.getCountry() + " "+customer1.getCountry_code() +" " +customer1.getState());
            }
            else if(matcher_Uganda.matches()){
                customer1.setCountry("Uganda");
                customer1.setCountry_code("+256");
                customer1.setState("Valid");
                System.out.println(customer1.getCountry() +" "+ customer1.getCountry_code() +" "+ customer1.getState());

            }
            else{
                customer1.setState("Invalid");
                System.out.println("Invalid");
                //return false;
            }
        } catch (Exception e) {
            //return false;
            e.printStackTrace();
        }
       // return false;
    }

    public List<Customer> fetchCustomer() {
        List<Customer> list = customerRepository.findAll();
        List<String> namesList = list.stream()
                .map(Customer::getPhone)
                .collect(Collectors.toList());

        for (String cities : namesList)
        {
               isValid(cities);
        }

        return list;
    }


//        public static void main(String[] args){
//        String str1 = "(212) 691933626";
//        isValid(str1);
//    }


}
