//We have populated the solutions for the 10 easiest problems for your support.
//Click on the SUBMIT button to make a submission to this problem.

#include<stdio.h>
int main()
{
    int x;
    float bal;
    scanf("%d %f",&x,&bal);
    if(x%5!=0)
    {
        printf("%.2f\n",bal);
    }
    else if(x>bal)
    {
        printf("%.2f\n",bal);
    }
    else if((bal-0.50)>=x)
    {
        bal=bal-x-0.50;
        printf("%.2f\n",bal);
    }
    else
    {
        printf("%.2f\n",bal);
    }
    return 0;
}
