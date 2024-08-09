//2 important conditions for valid phone numbers
//--> numbers must not begin with 0
//--> length of number should be **equal to 5


//we need to check if total bill is equivalent to valid phone number or not
//bill will be number of item multiplied with cost
//we would not get zero at begining so we just need to check length

#include <stdio.h>
#include <string.h>
int main()
{
    int t,n,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d %d",&n,&x);
        char s[20];
        sprintf(s,"%d",n*x);
        if(strlen(s)==5)
        {
            printf("YES\n");
        }
        else
        {
            printf("NO\n");
        }
    }
    return 0;
}