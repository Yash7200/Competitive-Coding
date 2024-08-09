//Problem Simplification:
    //Sammy is happy if she has more candies than Simmy
    //Simmy is happy if difference between both sister is not more than 1
    //Print 'YES' shopkeeper is able to make both happy
    //Print 'NO' shopkeeper is unable to make both happy

//Logic:
    //Both will be happy if Sammy have higher candies & difference of candies between both sisters is 1
    //Count total candies
    //to count candies initiate variable 'sum' with value 0
    //run a for adding number of candies to variable 'sum'
    //if total candies are in odd number then our condition will satisfy
    //run if-else condition to check if number is odd or not.
    //if number is odd then print yes otherwise no

#include <stdio.h>
int main()
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        int n,sum=0;
        scanf("%d",&n);
        int a[n];
        for(int j=0;j<n;j++)
        {
            scanf("%d",&a[j]);
            sum=sum+a[j];
        }
        if(sum%2==1)
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