#include <stdio.h>
int main()
{
    int t,n;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);
        int arr[n];
        int power;
        for(int j=0;j<n;j++)
        {
            scanf("%d",&arr[j]);
            if(arr[j]!=0)
            {
                power=j;
            }
        }
        printf("%d\n",power);
    }
    return 0;
}
